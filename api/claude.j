export default async function handler(req, res) {
  // Allow POST only
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

    const anthropicResponse = await fetch(
      'https://api.anthropic.com/v1/messages',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },

        body: JSON.stringify({
          model: 'claude-sonnet-4-6',

          max_tokens: safeMaxTokens,

          system:
            typeof systemPrompt === 'string'
              ? systemPrompt
              : '',

          messages: [
            {
              role: 'user',
              content: userPrompt
            }
          ]
        })
      }
    );

    const data = await anthropicResponse.json();

    if (!anthropicResponse.ok) {
      console.error('Anthropic error:', data);

      return res.status(anthropicResponse.status).json({
        error: 'Claude API request failed'
      });
    }

    const textBlock = (data.content || []).find(
      block => block.type === 'text'
    );

    if (!textBlock) {
      return res.status(500).json({
        error: 'Claude returned no text'
      });
    }

    return res.status(200).json({
      text: textBlock.text
    });

  } catch (error) {
    console.error('Server error:', error);

    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}
