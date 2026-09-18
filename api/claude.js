export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    });
  }

  try {
    const {
      systemPrompt,
      userPrompt,
      maxTokens
    } = req.body || {};

    if (
      typeof userPrompt !== 'string' ||
      !userPrompt.trim()
    ) {
      return res.status(400).json({
        error: 'Missing user prompt'
      });
    }

    const safeMaxTokens = Math.min(
      Math.max(Number(maxTokens) || 1000, 100),
      2000
    );

    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'HTTP-Referer': 'https://manara-kappa.vercel.app',
          'X-Title': 'Manara'
        },

        body: JSON.stringify({
          model: 'openrouter/free',

          max_tokens: safeMaxTokens,

          messages: [
            {
              role: 'system',
              content:
                typeof systemPrompt === 'string'
                  ? systemPrompt
                  : 'You are a helpful educational assistant.'
            },
            {
              role: 'user',
              content: userPrompt
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      const errorMessage =
        data?.error?.message ||
        JSON.stringify(data);

      console.error(
        `OpenRouter API ${response.status}: ${errorMessage}`
      );

      return res.status(response.status).json({
        error: errorMessage
      });
    }

    const text =
      data?.choices?.[0]?.message?.content;

    if (!text) {
      return res.status(500).json({
        error: 'AI returned no text'
      });
    }

    return res.status(200).json({
      text: text
    });

  } catch (error) {
    console.error('Server error:', error);

    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}
