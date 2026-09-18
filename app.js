
/* ============ Local storage shim (works on any static host) ============ */
const storage = {
  async get(key){
    try{
      const v = localStorage.getItem(key);
      return v === null ? null : { key, value: v };
    }catch(e){ return null; }
  },
  async set(key, value){
    try{
      localStorage.setItem(key, value);
      return { key, value };
    }catch(e){ return null; }
  }
};

/* ============ i18n ============ */
const translations = {
  ar: {
    brandSub: "مساعدك بالمذاكرة والتحضير",
    navDashboard: "الرئيسية", navSummarize: "تلخيص ذكي", navExplain: "اشرحلي",
    navQuiz: "أسئلة مراجعة", navSolver: "حل خطوة بخطوة", navInterview: "تحضير المقابلة", navTasks: "منظم الوقت",
    sidebarFooter: "يعمل بالذكاء الاصطناعي — راجع أي جواب مهم قبل ما تعتمد عليه.",
    dashGreeting: "أهلاً فيك 👋",
    dashSub: "هاي لوحتك الرئيسية. شوف مهامك القريبة وابدأ بأي أداة من تحت.",
    dashUpcoming: "أقرب المهام", dashOpenTasks: "افتح منظم الوقت",
    cardSumTitle: "تلخيص محاضرة أو فصل", cardSumDesc: "الصق نص طويل واحصل على ملخص منظم بنقاط.",
    cardExpTitle: "اشرحلي موضوع صعب", cardExpDesc: "شرح مبسط خطوة بخطوة زي معلم خاص.",
    cardQuizTitle: "أسئلة مراجعة ذاتية", cardQuizDesc: "اختبر نفسك بأسئلة اختيار من متعدد.",
    cardIvTitle: "تحضير مقابلة", cardIvDesc: "جامعية أو وظيفية — أسئلة متوقعة وتقييم إجاباتك.",
    sumHead: "تلخيص ذكي", sumSub: "الصق نص المحاضرة أو الفصل، وبطلعلك ملخص منظم بأهم النقاط.",
    sumLabel: "النص", sumPh: "الصق هون النص الطويل يلي بدك تلخيصه...", sumBtn: "لخصلي",
    sumBusy: "عم ألخص...", sumEmptyErr: "الصق نص الأول.",
    expHead: "اشرحلي", expSub: "اكتب أي موضوع أو مفهوم صعب، وبنشرحلك ياه بطريقة مبسطة، خطوة بخطوة.",
    expLabel: "الموضوع", expPh: "مثلاً: قانون نيوتن التاني، أو نظرية فيثاغورس...", expBtn: "اشرحلي",
    expBusy: "عم أشرح...", expEmptyErr: "اكتب الموضوع الأول.",
    quizHead: "أسئلة مراجعة", quizSub: "اكتب موضوع، وبنولّدلك 5 أسئلة اختيار من متعدد تختبر فهمك.",
    quizLabel: "الموضوع", quizPh: "مثلاً: الخلية النباتية، أو الحرب العالمية الأولى...", quizBtn: "ولّد أسئلة",
    quizBusy: "عم ولّد الأسئلة...", quizEmptyErr: "اكتب موضوع الأول.",
    quizGenErr: "ما قدرت ولّد الأسئلة، حاول كمان مرة.",
    quizQuestionsTitle: "الأسئلة", quizCheckBtn: "صحّح إجاباتي", quizScoreLabel: "نتيجتك", quizScoreOf: "من",
    solHead: "حل خطوة بخطوة", solSub: "اكتب مسألة رياضيات أو فيزياء، وبنحلها معك خطوة بخطوة بشرح كل خطوة.",
    solLabel: "المسألة", solPh: "مثلاً: احسب مساحة مثلث ضلعاه 6 سم و8 سم بينهما زاوية قائمة", solBtn: "حلّها",
    solBusy: "عم أحل...", solEmptyErr: "اكتب المسألة الأول.",
    ivHead: "تحضير المقابلة", ivSub: "اختار نوع المقابلة يلي عم تحضرلها — كل نوع إله أسئلة وتقييم مختلف.",
    ivTabUni: "مقابلة جامعية", ivTabJob: "مقابلة وظيفية",
    ivQuestionsTitle: "أسئلة متوقعة", ivBadgeUni: "جامعية", ivBadgeJob: "وظيفية",
    ivRegenBtn: "أسئلة جديدة", ivLoadingQ: "عم يحمّل الأسئلة...", ivLoadErr: "ما قدرت حمّل الأسئلة.",
    ivPracticeTitle: "درّب نفسك", ivPracticeLabel: "اختار سؤال من فوق واكتب جوابك هون، وبنقيّملك ياه",
    ivAnswerPh: "اكتب جوابك هون...", ivAnswerForPh: "جوابك عن: ", ivEvalBtn: "قيّم جوابي",
    ivEvalBusy: "عم أقيّم...", ivEmptyErr: "اكتب جوابك الأول.", ivGenericQ: "(سؤال عام)",
    tasksHead: "منظم الوقت", tasksSub: "ضيف مهامك ومواعيدها النهائية، ورتبها حسب الأولوية.",
    taskTitlePh: "اسم المهمة (مثلاً: مراجعة فصل 3 رياضيات)",
    taskPHigh: "أولوية عالية", taskPMed: "أولوية متوسطة", taskPLow: "أولوية منخفضة",
    taskAddBtn: "إضافة", taskNoDate: "بدون موعد", taskDelete: "حذف",
    taskEmpty: "ما في مهام لسا. ضيف أول مهمة فوق.", taskEmptyDash: "ما في مهام قريبة. ضيف مهامك من منظم الوقت.",
    genericErr: "صار في خطأ، حاول كمان مرة.",
    sysSummarize: "أنت مساعد دراسي بيلخص نصوص طويلة (محاضرات أو فصول كتب) لطالب. اكتب الملخص بالعربي الفصيح البسيط، منظم بنقاط قصيرة تحت عناوين فرعية إذا لزم. ركز على الأفكار الأساسية بس. لا تضيف مقدمة أو خاتمة، ابدأ مباشرة بالملخص.",
    sysExplain: "أنت معلم خاص صبور بيشرح مواضيع صعبة لطالب بطريقة مبسطة جداً. استخدم لغة سهلة، أمثلة واقعية إذا أمكن، وقسّم الشرح لخطوات أو نقاط واضحة. تجنب المصطلحات المعقدة إلا إذا شرحتها. اكتب بالعربي البسيط.",
    sysQuiz: "أنت مولّد أسئلة اختيار من متعدد للمراجعة الذاتية. رجاءً رجاوب فقط بصيغة JSON صحيحة بدون أي نص إضافي أو علامات markdown، على هذا الشكل بالضبط: [{\"q\":\"نص السؤال\",\"options\":[\"خيار1\",\"خيار2\",\"خيار3\",\"خيار4\"],\"correct\":0}]. اكتب 5 أسئلة متنوعة بالعربي عن الموضوع المعطى. correct هو رقم الخيار الصحيح (يبدأ من صفر).",
    sysSolve: "أنت معلم رياضيات وفيزياء بيحل مسائل خطوة بخطوة لطالب. اشرح كل خطوة بوضوح مع القانون أو المبدأ المستخدم، وبيّن الحل النهائي بشكل واضح في الآخر. اكتب بالعربي البسيط.",
    sysIvGen: "أنت مساعد تحضير مقابلات.",
    ivPromptUni: "ولّد 6 أسئلة متوقعة لمقابلة قبول جامعي (أسئلة عن الدافع للدراسة، نقاط القوة، أهداف مستقبلية، تجارب أكاديمية). رجاوب فقط بصيغة JSON: [\"سؤال1\",\"سؤال2\",...] بدون أي نص إضافي، بالعربي.",
    ivPromptJob: "ولّد 6 أسئلة متوقعة لمقابلة وظيفة مستوى مبتدئ (خدمة عملاء، بيع بالتجزئة، استقبال، تقديم طعام). رجاوب فقط بصيغة JSON: [\"سؤال1\",\"سؤال2\",...] بدون أي نص إضافي، بالعربي.",
    sysIvEval: "أنت مدرب مقابلات بيقيّم جواب طالب على سؤال مقابلة ويعطيه ملاحظات بنّاءة ومحددة، مع اقتراح كيف يحسّن جوابه. لا تكن قاسي بس كون صريح. اكتب بالعربي البسيط، بنقاط قصيرة.",
    ivEvalCtxUni: "هاي مقابلة قبول جامعي. قيّم الجواب من ناحية الوضوح، الصدق، وقوة الدافع الأكاديمي.",
    ivEvalCtxJob: "هاي مقابلة وظيفة مستوى مبتدئ. قيّم الجواب من ناحية الاحترافية، الثقة، ومدى ملاءمته لبيئة العمل.",
    ivQuestionLabel: "السؤال", ivAnswerLabel: "جواب الطالب"
  },
  en: {
    brandSub: "Your study & prep companion",
    navDashboard: "Home", navSummarize: "Smart Summary", navExplain: "Explain It",
    navQuiz: "Practice Quiz", navSolver: "Step-by-Step Solver", navInterview: "Interview Prep", navTasks: "Time Planner",
    sidebarFooter: "Powered by AI — double-check any important answer before relying on it.",
    dashGreeting: "Welcome 👋",
    dashSub: "This is your home base. Check your upcoming tasks and jump into any tool below.",
    dashUpcoming: "Upcoming tasks", dashOpenTasks: "Open time planner",
    cardSumTitle: "Summarize a lecture or chapter", cardSumDesc: "Paste a long text and get an organized bullet-point summary.",
    cardExpTitle: "Explain a hard topic", cardExpDesc: "A simple, step-by-step explanation like a private tutor.",
    cardQuizTitle: "Self-review quiz", cardQuizDesc: "Test yourself with multiple-choice questions.",
    cardIvTitle: "Interview prep", cardIvDesc: "University or job — expected questions and feedback on your answers.",
    sumHead: "Smart Summary", sumSub: "Paste the lecture or chapter text and get an organized summary of the key points.",
    sumLabel: "Text", sumPh: "Paste the long text you want summarized here...", sumBtn: "Summarize",
    sumBusy: "Summarizing...", sumEmptyErr: "Paste some text first.",
    expHead: "Explain It", expSub: "Write any tough topic or concept and get a simplified, step-by-step explanation.",
    expLabel: "Topic", expPh: "e.g. Newton's second law, or the Pythagorean theorem...", expBtn: "Explain",
    expBusy: "Explaining...", expEmptyErr: "Write the topic first.",
    quizHead: "Practice Quiz", quizSub: "Write a topic and get 5 multiple-choice questions to test your understanding.",
    quizLabel: "Topic", quizPh: "e.g. plant cells, or World War I...", quizBtn: "Generate quiz",
    quizBusy: "Generating questions...", quizEmptyErr: "Write a topic first.",
    quizGenErr: "Couldn't generate the questions, try again.",
    quizQuestionsTitle: "Questions", quizCheckBtn: "Check my answers", quizScoreLabel: "Score", quizScoreOf: "out of",
    solHead: "Step-by-Step Solver", solSub: "Write a math or physics problem and get it solved step by step, with each step explained.",
    solLabel: "Problem", solPh: "e.g. Find the area of a right triangle with legs 6 cm and 8 cm", solBtn: "Solve",
    solBusy: "Solving...", solEmptyErr: "Write the problem first.",
    ivHead: "Interview Prep", ivSub: "Choose which kind of interview you're prepping for — each has different questions and feedback.",
    ivTabUni: "University interview", ivTabJob: "Job interview",
    ivQuestionsTitle: "Expected questions", ivBadgeUni: "University", ivBadgeJob: "Job",
    ivRegenBtn: "New questions", ivLoadingQ: "Loading questions...", ivLoadErr: "Couldn't load the questions.",
    ivPracticeTitle: "Practice", ivPracticeLabel: "Pick a question above and write your answer here to get it evaluated.",
    ivAnswerPh: "Write your answer here...", ivAnswerForPh: "Your answer to: ", ivEvalBtn: "Evaluate my answer",
    ivEvalBusy: "Evaluating...", ivEmptyErr: "Write your answer first.", ivGenericQ: "(general question)",
    tasksHead: "Time Planner", tasksSub: "Add your tasks and deadlines, sorted by priority.",
    taskTitlePh: "Task name (e.g. Review math chapter 3)",
    taskPHigh: "High priority", taskPMed: "Medium priority", taskPLow: "Low priority",
    taskAddBtn: "Add", taskNoDate: "No date", taskDelete: "Delete",
    taskEmpty: "No tasks yet. Add your first one above.", taskEmptyDash: "No upcoming tasks. Add some from the time planner.",
    genericErr: "Something went wrong, try again.",
    sysSummarize: "You are a study assistant that summarizes long texts (lectures or book chapters) for a student. Write the summary in clear, simple English, organized into short bullet points under subheadings if needed. Focus only on the core ideas. Do not add an intro or conclusion, start directly with the summary.",
    sysExplain: "You are a patient private tutor who explains difficult topics to a student very simply. Use easy language, real-world examples where possible, and break the explanation into clear steps or points. Avoid complex jargon unless you explain it. Write in simple English.",
    sysQuiz: "You generate multiple-choice questions for self-review. Respond ONLY with valid JSON, no extra text or markdown, in exactly this shape: [{\"q\":\"question text\",\"options\":[\"option1\",\"option2\",\"option3\",\"option4\"],\"correct\":0}]. Write 5 varied questions in English about the given topic. correct is the index of the correct option (starting from 0).",
    sysSolve: "You are a math and physics teacher who solves problems step by step for a student. Explain each step clearly with the law or principle used, and clearly state the final answer at the end. Write in simple English.",
    sysIvGen: "You are an interview prep assistant.",
    ivPromptUni: "Generate 6 likely questions for a university admissions interview (motivation to study, strengths, future goals, academic experiences). Respond ONLY with JSON: [\"question1\",\"question2\",...], no extra text, in English.",
    ivPromptJob: "Generate 6 likely questions for an entry-level job interview (customer service, retail, reception, food service). Respond ONLY with JSON: [\"question1\",\"question2\",...], no extra text, in English.",
    sysIvEval: "You are an interview coach who evaluates a student's answer to an interview question and gives specific, constructive feedback, with a suggestion on how to improve it. Don't be harsh, but be honest. Write in simple English, in short bullet points.",
    ivEvalCtxUni: "This is a university admissions interview. Evaluate the answer for clarity, honesty, and strength of academic motivation.",
    ivEvalCtxJob: "This is an entry-level job interview. Evaluate the answer for professionalism, confidence, and fit for a work environment.",
    ivQuestionLabel: "Question", ivAnswerLabel: "Student's answer"
  }
};

let currentLang = 'ar';
try{ const saved = localStorage.getItem('lang'); if(saved === 'ar' || saved === 'en') currentLang = saved; }catch(e){}

function tr(key){ return translations[currentLang][key]; }

function applyLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if(translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if(translations[lang][key] !== undefined) el.placeholder = translations[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  updateIvBadge();
  renderTasks();
  renderDashboardTasks();
  try{ localStorage.setItem('lang', lang); }catch(e){}
}

document.querySelectorAll('.lang-btn').forEach(b => {
  b.addEventListener('click', () => applyLanguage(b.dataset.lang));
});

/* ============ Navigation ============ */
const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');

function goTo(name){
  navItems.forEach(n => n.classList.toggle('active', n.dataset.view === name));
  views.forEach(v => v.classList.toggle('active', v.dataset.view === name));
  window.scrollTo(0,0);
  if(name === 'dashboard') renderDashboardTasks();
}
navItems.forEach(n => n.addEventListener('click', () => goTo(n.dataset.view)));
document.querySelectorAll('[data-goto]').forEach(el => {
  el.addEventListener('click', () => goTo(el.dataset.goto));
});

/* ============ Claude API helper ============ */
async function askClaude(systemPrompt, userPrompt, maxTokens){
  const res = await fetch('/api/claude', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      systemPrompt: systemPrompt,
      userPrompt: userPrompt,
      maxTokens: maxTokens || 1000
    })
  });

  const data = await res.json();

  if(!res.ok){
    throw new Error(data.error || ('API error ' + res.status));
  }

  if(!data.text){
    throw new Error('no text response');
  }

  return data.text;
}

function stripFences(t){
  return t.replace(/```json/g,'').replace(/```/g,'').trim();
}

function renderMarkdownish(container, text){
  const lines = text.split('\n');

  let html = '';
  let inList = false;

  let inMath = false;
  let mathClose = '';
  let mathLines = [];

  function closeList(){
    if(inList){
      html += '</ul>';
      inList = false;
    }
  }

  function closeMath(){
    closeList();

    html += '<div class="math-block">' +
      mathLines.join('\n') +
      '</div>';

    mathLines = [];
    inMath = false;
    mathClose = '';
  }

  for(let rawLine of lines){
    let line = rawLine.trim();

    // We are already inside a display equation
    if(inMath){
      mathLines.push(line);

      if(line.includes(mathClose)){
        closeMath();
      }

      continue;
    }

    // Start of \[ ... \]
    if(line.startsWith('\\[')){
      closeList();

      inMath = true;
      mathClose = '\\]';
      mathLines = [line];

      if(line.includes('\\]')){
        closeMath();
      }

      continue;
    }

    // Start of $$ ... $$
    if(line.startsWith('$$')){
      closeList();

      inMath = true;
      mathClose = '$$';
      mathLines = [line];

      if(
        line.length > 2 &&
        line.substring(2).includes('$$')
      ){
        closeMath();
      }

      continue;
    }

    if(!line){
      closeList();
      continue;
    }

    line = line.replace(
      /\*\*(.+?)\*\*/g,
      '<b>$1</b>'
    );

    if(/^[-•]\s+/.test(line)){

      if(!inList){
        html += '<ul>';
        inList = true;
      }

      html += '<li>' +
        line.replace(/^[-•]\s+/, '') +
        '</li>';

    } else if(/^#{1,3}\s+/.test(line)){

      closeList();

      html += '<h4>' +
        line.replace(/^#{1,3}\s+/, '') +
        '</h4>';

    } else {

      closeList();

      html += '<p>' +
        line +
        '</p>';
    }
  }

  closeList();

  if(inMath){
    closeMath();
  }

  container.innerHTML = html;

  // Render LaTeX equations with MathJax
  if(window.MathJax && MathJax.typesetPromise){
    MathJax.typesetPromise([container]).catch(
      err => console.error('MathJax error:', err)
    );
  }
}
  // lightweight formatter: turns lines starting with - into <li>, blank lines into breaks, **bold** into <b>
  const lines = text.split('\n');
  let html = '';
  let inList = false;
  for(let line of lines){
    line = line.trim();
    if(!line){ if(inList){ html += '</ul>'; inList=false; } continue; }
    line = line.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
    if(/^[-•]\s+/.test(line)){
      if(!inList){ html += '<ul>'; inList = true; }
      html += '<li>' + line.replace(/^[-•]\s+/, '') + '</li>';
    } else if(/^#{1,3}\s+/.test(line)){
      if(inList){ html += '</ul>'; inList=false; }
      html += '<h4>' + line.replace(/^#{1,3}\s+/, '') + '</h4>';
    } else {
      if(inList){ html += '</ul>'; inList=false; }
      html += '<p>' + line + '</p>';
    }
  }
  if(inList) html += '</ul>';
  container.innerHTML = html;
}

function setBusy(btn, statusEl, busy, busyText){
  btn.disabled = busy;
  if(statusEl) statusEl.textContent = busy ? (busyText || '...') : '';
}
function setError(statusEl, msg){
  statusEl.textContent = msg || tr('genericErr');
  statusEl.classList.add('err');
}
function clearError(statusEl){
  statusEl.classList.remove('err');
  statusEl.textContent = '';
}

/* ============ Summarize ============ */
document.getElementById('sumBtn').addEventListener('click', async () => {
  const input = document.getElementById('sumInput').value.trim();
  const status = document.getElementById('sumStatus');
  const outWrap = document.getElementById('sumOutput');
  const out = document.getElementById('sumResult');
  const btn = document.getElementById('sumBtn');
  clearError(status);
  if(!input){ setError(status, tr('sumEmptyErr')); return; }
  setBusy(btn, status, true, tr('sumBusy'));
  try{
    const text = await askClaude(tr('sysSummarize'), input, 1200);
    renderMarkdownish(out, text);
    outWrap.classList.add('show');
    clearError(status);
  }catch(e){ setError(status); }
  setBusy(btn, status, false);
});

/* ============ Explain ============ */
document.getElementById('expBtn').addEventListener('click', async () => {
  const input = document.getElementById('expInput').value.trim();
  const status = document.getElementById('expStatus');
  const outWrap = document.getElementById('expOutput');
  const out = document.getElementById('expResult');
  const btn = document.getElementById('expBtn');
  clearError(status);
  if(!input){ setError(status, tr('expEmptyErr')); return; }
  setBusy(btn, status, true, tr('expBusy'));
  try{
    const text = await askClaude(tr('sysExplain'), input, 1200);
    renderMarkdownish(out, text);
    outWrap.classList.add('show');
    clearError(status);
  }catch(e){ setError(status); }
  setBusy(btn, status, false);
});

/* ============ Quiz ============ */
let currentQuiz = [];
document.getElementById('quizBtn').addEventListener('click', async () => {
  const topic = document.getElementById('quizInput').value.trim();
  const status = document.getElementById('quizStatus');
  const btn = document.getElementById('quizBtn');
  clearError(status);
  if(!topic){ setError(status, tr('quizEmptyErr')); return; }
  setBusy(btn, status, true, tr('quizBusy'));
  try{
    const raw = await askClaude(tr('sysQuiz'), topic, 1500);
    const parsed = JSON.parse(stripFences(raw));
    currentQuiz = parsed;
    renderQuiz(parsed);
    clearError(status);
  }catch(e){ setError(status, tr('quizGenErr')); }
  setBusy(btn, status, false);
});

function renderQuiz(qs){
  const sheet = document.getElementById('quizSheet');
  const body = document.getElementById('quizBody');
  const scoreEl = document.getElementById('quizScore');
  scoreEl.textContent = '';
  body.innerHTML = '';
  qs.forEach((q, qi) => {
    const div = document.createElement('div');
    div.className = 'quiz-q';
    div.dataset.qi = qi;
    div.dataset.selected = '';
    const qtext = document.createElement('div');
    qtext.className = 'qtext';
    qtext.textContent = (qi+1) + '. ' + q.q;
    div.appendChild(qtext);
    q.options.forEach((opt, oi) => {
      const optEl = document.createElement('div');
      optEl.className = 'opt';
      optEl.textContent = opt;
      optEl.dataset.oi = oi;
      optEl.addEventListener('click', () => {
        if(div.dataset.checked === '1') return;
        div.querySelectorAll('.opt').forEach(o => o.classList.remove('selected'));
        optEl.classList.add('selected');
        div.dataset.selected = oi;
      });
      div.appendChild(optEl);
    });
    body.appendChild(div);
  });
  sheet.style.display = 'block';
}

document.getElementById('quizCheckBtn').addEventListener('click', () => {
  const qDivs = document.querySelectorAll('.quiz-q');
  let correct = 0;
  qDivs.forEach(div => {
    const qi = parseInt(div.dataset.qi);
    const sel = div.dataset.selected;
    div.dataset.checked = '1';
    const opts = div.querySelectorAll('.opt');
    const correctIdx = currentQuiz[qi].correct;
    opts.forEach(o => {
      const oi = parseInt(o.dataset.oi);
      if(oi === correctIdx) o.classList.add('correct');
      else if(String(oi) === sel) o.classList.add('wrong');
    });
    if(String(correctIdx) === sel) correct++;
  });
  document.getElementById('quizScore').textContent = `${tr('quizScoreLabel')}: ${correct} ${tr('quizScoreOf')} ${qDivs.length}`;
});

/* ============ Solver ============ */
document.getElementById('solBtn').addEventListener('click', async () => {
  const input = document.getElementById('solInput').value.trim();
  const status = document.getElementById('solStatus');
  const outWrap = document.getElementById('solOutput');
  const out = document.getElementById('solResult');
  const btn = document.getElementById('solBtn');
  clearError(status);
  if(!input){ setError(status, tr('solEmptyErr')); return; }
  setBusy(btn, status, true, tr('solBusy'));
  try{
    const text = await askClaude(tr('sysSolve'), input, 1200);
    renderMarkdownish(out, text);
    outWrap.classList.add('show');
    clearError(status);
  }catch(e){ setError(status); }
  setBusy(btn, status, false);
});

/* ============ Interview prep ============ */
let ivMode = 'uni';
const ivTabs = document.querySelectorAll('.tab');

function updateIvBadge(){
  const badge = document.getElementById('ivModeBadge');
  badge.textContent = ivMode === 'uni' ? tr('ivBadgeUni') : tr('ivBadgeJob');
  badge.className = 'mode-badge ' + (ivMode === 'uni' ? 'uni' : 'job');
}

ivTabs.forEach(t => t.addEventListener('click', () => {
  ivMode = t.dataset.mode;
  ivTabs.forEach(x => x.classList.toggle('active', x === t));
  updateIvBadge();
  loadIvQuestions();
}));

async function loadIvQuestions(){
  const status = document.getElementById('ivQStatus');
  const list = document.getElementById('ivQuestions');
  clearError(status);
  status.textContent = tr('ivLoadingQ');
  list.innerHTML = '';
  try{
    const cacheKey = 'iv:questions:' + ivMode + ':' + currentLang;
    let cached = null;
    try{ const r = await storage.get(cacheKey); cached = r ? JSON.parse(r.value) : null; }catch(e){}
    if(cached){
      renderIvQuestions(cached);
      status.textContent = '';
      return;
    }
    await regenerateIvQuestions();
  }catch(e){ setError(status); }
}

async function regenerateIvQuestions(){
  const status = document.getElementById('ivQStatus');
  const prompt = ivMode === 'uni' ? tr('ivPromptUni') : tr('ivPromptJob');
  status.textContent = tr('ivLoadingQ');
  try{
    const raw = await askClaude(tr('sysIvGen'), prompt, 800);
    const qs = JSON.parse(stripFences(raw));
    renderIvQuestions(qs);
    try{ await storage.set('iv:questions:' + ivMode + ':' + currentLang, JSON.stringify(qs)); }catch(e){}
    clearError(status);
  }catch(e){ setError(status, tr('ivLoadErr')); }
}

function renderIvQuestions(qs){
  const list = document.getElementById('ivQuestions');
  list.innerHTML = '';
  qs.forEach((q, i) => {
    const li = document.createElement('li');
    li.innerHTML = '<b>' + (i+1) + '.</b> ' + q;
    li.style.cursor = 'pointer';
    li.addEventListener('click', () => {
      document.getElementById('ivAnswer').dataset.question = q;
      document.getElementById('ivAnswer').placeholder = tr('ivAnswerForPh') + q;
      document.getElementById('ivAnswer').focus();
    });
    list.appendChild(li);
  });
}

document.getElementById('ivRegenBtn').addEventListener('click', regenerateIvQuestions);

document.getElementById('ivEvalBtn').addEventListener('click', async () => {
  const answerBox = document.getElementById('ivAnswer');
  const answer = answerBox.value.trim();
  const question = answerBox.dataset.question || tr('ivGenericQ');
  const status = document.getElementById('ivEvalStatus');
  const outWrap = document.getElementById('ivOutput');
  const out = document.getElementById('ivResult');
  const btn = document.getElementById('ivEvalBtn');
  clearError(status);
  if(!answer){ setError(status, tr('ivEmptyErr')); return; }
  setBusy(btn, status, true, tr('ivEvalBusy'));
  try{
    const context = ivMode === 'uni' ? tr('ivEvalCtxUni') : tr('ivEvalCtxJob');
    const text = await askClaude(
      tr('sysIvEval'),
      `${context}\n\n${tr('ivQuestionLabel')}: ${question}\n\n${tr('ivAnswerLabel')}: ${answer}`,
      900
    );
    renderMarkdownish(out, text);
    outWrap.classList.add('show');
    clearError(status);
  }catch(e){ setError(status); }
  setBusy(btn, status, false);
});

/* ============ Tasks (persisted) ============ */
let tasks = [];

async function loadTasks(){
  try{
    const r = await storage.get('tasks');
    tasks = r ? JSON.parse(r.value) : [];
  }catch(e){ tasks = []; }
  renderTasks();
  renderDashboardTasks();
}
async function saveTasks(){
  try{ await storage.set('tasks', JSON.stringify(tasks)); }catch(e){}
}

function priorityRank(p){ return p === 'high' ? 0 : p === 'med' ? 1 : 2; }
function sortedTasks(){
  return [...tasks].sort((a,b) => {
    if(a.done !== b.done) return a.done ? 1 : -1;
    const dateA = a.date || '9999-99-99';
    const dateB = b.date || '9999-99-99';
    if(dateA !== dateB) return dateA < dateB ? -1 : 1;
    return priorityRank(a.priority) - priorityRank(b.priority);
  });
}

function taskItemEl(task){
  const li = document.createElement('li');
  li.className = 'task-item p-' + task.priority;
  const check = document.createElement('input');
  check.type = 'checkbox';
  check.checked = !!task.done;
  check.addEventListener('change', () => { task.done = check.checked; saveTasks(); renderTasks(); renderDashboardTasks(); });
  const title = document.createElement('span');
  title.className = 't-title' + (task.done ? ' done' : '');
  title.textContent = task.title;
  const meta = document.createElement('span');
  meta.className = 't-meta';
  meta.textContent = task.date ? task.date : tr('taskNoDate');
  const del = document.createElement('button');
  del.className = 't-del';
  del.textContent = tr('taskDelete');
  del.addEventListener('click', () => { tasks = tasks.filter(x => x.id !== task.id); saveTasks(); renderTasks(); renderDashboardTasks(); });
  li.appendChild(check); li.appendChild(title); li.appendChild(meta); li.appendChild(del);
  return li;
}

function renderTasks(){
  const list = document.getElementById('taskListFull');
  list.innerHTML = '';
  const st = sortedTasks();
  if(st.length === 0){
    list.innerHTML = '<div class="empty-note">' + tr('taskEmpty') + '</div>';
    return;
  }
  st.forEach(task => list.appendChild(taskItemEl(task)));
}

function renderDashboardTasks(){
  const list = document.getElementById('dashTaskList');
  list.innerHTML = '';
  const upcoming = sortedTasks().filter(task => !task.done).slice(0,4);
  if(upcoming.length === 0){
    list.innerHTML = '<div class="empty-note">' + tr('taskEmptyDash') + '</div>';
    return;
  }
  upcoming.forEach(task => list.appendChild(taskItemEl(task)));
}

document.getElementById('taskAddBtn').addEventListener('click', () => {
  const titleEl = document.getElementById('taskTitle');
  const dateEl = document.getElementById('taskDate');
  const prEl = document.getElementById('taskPriority');
  const title = titleEl.value.trim();
  if(!title) return;
  tasks.push({ id: Date.now().toString(), title, date: dateEl.value, priority: prEl.value, done:false });
  titleEl.value = ''; dateEl.value = '';
  saveTasks(); renderTasks(); renderDashboardTasks();
});

/* ============ Init ============ */
applyLanguage(currentLang);
loadTasks();
loadIvQuestions();
