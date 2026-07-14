<template>
  <main class="music-app">
    <section class="hero-card doodle-card">
      <nav class="top-bar">
        <div class="brand-badge">
          <span class="mascot">♪</span>
          <div>
            <strong>唱唱鸟</strong>
            <small>零基础唱歌闯关</small>
          </div>
        </div>
        <div class="streak-pill">🔥 连续 3 天</div>
      </nav>

      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">像玩多邻国一样学唱歌</p>
          <h1>从“音乐白痴”到敢开口唱第一首歌</h1>
          <p class="subtitle">
            每天 8 分钟，用听音、跟唱、节奏拍手和小游戏，把音准、气息、节奏拆成轻松可完成的小任务。
          </p>
          <div class="hero-actions">
            <button class="primary-btn" @click="startLesson">开始今日练习</button>
            <button class="ghost-btn" @click="selectedLesson = lessons[1]">先测音准</button>
          </div>
        </div>

        <div class="bird-card">
          <div class="sunburst" />
          <div class="hand-bird">
            <span class="eye left" />
            <span class="eye right" />
            <span class="beak" />
            <span class="wing" />
            <span class="note note-one">♫</span>
            <span class="note note-two">♪</span>
          </div>
          <p>今天目标：唱准 Do-Re-Mi</p>
        </div>
      </div>
    </section>

    <section class="progress-strip">
      <article v-for="stat in stats" :key="stat.label" class="stat-card">
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </article>
    </section>

    <section class="lesson-layout">
      <aside class="path-card doodle-card">
        <h2>新手学习路径</h2>
        <div class="path-line">
          <button
            v-for="(lesson, index) in lessons"
            :key="lesson.title"
            :class="['lesson-node', { active: selectedLesson.title === lesson.title, locked: lesson.locked }]"
            @click="selectLesson(lesson)"
          >
            <span>{{ index + 1 }}</span>
            <div>
              <strong>{{ lesson.title }}</strong>
              <small>{{ lesson.time }}</small>
            </div>
          </button>
        </div>
      </aside>

      <section class="practice-card doodle-card">
        <div class="practice-head">
          <div>
            <p class="eyebrow">当前关卡</p>
            <h2>{{ selectedLesson.title }}</h2>
          </div>
          <span class="xp-badge">+{{ selectedLesson.xp }} XP</span>
        </div>
        <p class="lesson-goal">{{ selectedLesson.goal }}</p>

        <div class="challenge-box">
          <div class="staff-lines">
            <span v-for="line in 5" :key="line" />
            <b class="note-dot one" />
            <b class="note-dot two" />
            <b class="note-dot three" />
          </div>
          <ol>
            <li v-for="task in selectedLesson.tasks" :key="task">{{ task }}</li>
          </ol>
        </div>

        <div class="answer-row">
          <button v-for="choice in choices" :key="choice" @click="pickChoice(choice)">{{ choice }}</button>
        </div>

        <div class="feedback" :class="feedbackType">
          {{ feedback }}
        </div>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    const lessons = [
      {
        title: '找回身体里的拍子',
        time: '8 分钟',
        xp: 15,
        goal: '先不用唱好听，只要能跟着节拍稳定拍手，就完成第一步。',
        tasks: ['听 4 拍节奏', '用手拍出强弱弱弱', '跟着“哒哒哒哒”念两轮'],
      },
      {
        title: 'Do-Re-Mi 音准小测',
        time: '6 分钟',
        xp: 20,
        goal: '用阶梯感理解音高：Do 像地板，Re 上一阶，Mi 再上一阶。',
        tasks: ['听老师唱 Do', '滑到 Re 的高度', '回到 Do 检查是否跑调'],
      },
      {
        title: '气息像吹蜡烛',
        time: '7 分钟',
        xp: 18,
        goal: '学会用稳定气流唱长音，避免声音抖和挤。',
        tasks: ['吸气 4 秒', '嘶声呼气 8 秒', '唱 “Wu” 保持一条线'],
      },
      {
        title: '第一首副歌挑战',
        time: '10 分钟',
        xp: 30,
        goal: '把节奏、音准、气息合在一句简单旋律里。',
        tasks: ['先读歌词节奏', '哼唱旋律', '录下并给自己一颗星'],
        locked: true,
      },
    ];

    return {
      lessons,
      selectedLesson: lessons[0],
      choices: ['我跟上了', '再听一次', '太难了'],
      feedback: '选择一个反馈，唱唱鸟会给你下一步建议。',
      feedbackType: '',
      stats: [
        { value: '8 分钟', label: '每日目标' },
        { value: '12 关', label: '新手课程' },
        { value: '0 基础', label: '友好起点' },
      ],
    };
  },
  methods: {
    startLesson () {
      this.feedbackType = 'success';
      this.feedback = '太棒了！先坐直，肩膀放松，跟着 4 拍轻轻拍手。';
    },
    selectLesson (lesson) {
      if (lesson.locked) {
        this.feedbackType = 'warning';
        this.feedback = '先完成前三关，就能解锁第一首副歌挑战。';
        return;
      }
      this.selectedLesson = lesson;
      this.feedbackType = '';
      this.feedback = '新关卡已打开：先听，再模仿，最后给自己打星。';
    },
    pickChoice (choice) {
      const map = {
        我跟上了: ['success', '好耶！给自己 +1 信心星，下一轮把声音再放松一点。'],
        再听一次: ['warning', '没问题，学习唱歌就是多听多模仿。先哼，不急着唱歌词。'],
        太难了: ['warning', '把目标缩小：只唱第一个音 Do，唱稳 3 秒就算赢。'],
      };
      this.feedbackType = map[choice][0];
      this.feedback = map[choice][1];
    },
  },
};
</script>

<style lang="scss" scoped>
.music-app {
  min-height: 100vh;
  padding: 28px;
  color: #2e2600;
  background: linear-gradient(135deg, #ffe86b 0%, #fff7a8 42%, #fffdf0 100%);
  font-family: "Comic Sans MS", "PingFang SC", "Microsoft YaHei", sans-serif;
}

.doodle-card {
  border: 4px solid #2e2600;
  border-radius: 34px;
  background: rgba(255, 255, 255, .82);
  box-shadow: 10px 10px 0 #2e2600;
}

.hero-card {
  padding: 24px;
  overflow: hidden;
}

.top-bar,
.hero-grid,
.progress-strip,
.lesson-layout,
.practice-head,
.answer-row {
  display: flex;
  gap: 20px;
}

.top-bar,
.practice-head {
  align-items: center;
  justify-content: space-between;
}

.brand-badge,
.streak-pill,
.xp-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border: 3px solid #2e2600;
  border-radius: 999px;
  background: #fff4a3;
}

.brand-badge small {
  display: block;
}

.mascot {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #ffcf24;
  display: grid;
  place-items: center;
  font-size: 24px;
}

.hero-grid {
  align-items: center;
  margin-top: 36px;
}

.hero-copy {
  flex: 1;
}

.eyebrow {
  margin: 0 0 8px;
  color: #0f9f68;
  font-weight: 900;
  letter-spacing: .08em;
}

h1 {
  max-width: 720px;
  margin: 0;
  font-size: clamp(40px, 7vw, 86px);
  line-height: .95;
}

.subtitle,
.lesson-goal {
  max-width: 720px;
  font-size: 20px;
  line-height: 1.7;
}

button {
  border: 3px solid #2e2600;
  border-radius: 18px;
  padding: 14px 20px;
  background: #fff;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 4px 4px 0 #2e2600;
  transition: transform .18s ease, box-shadow .18s ease;
}

button:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #2e2600;
}

.primary-btn {
  background: #25d366;
}

.ghost-btn {
  background: #fff7b8;
}

.bird-card {
  position: relative;
  width: 300px;
  min-height: 300px;
  padding: 26px;
  text-align: center;
}

.sunburst {
  position: absolute;
  inset: 10px;
  border-radius: 50%;
  background: repeating-conic-gradient(from 8deg, #ffe04a 0deg 12deg, transparent 12deg 24deg);
  opacity: .65;
}

.hand-bird {
  position: relative;
  width: 190px;
  height: 190px;
  margin: 22px auto 10px;
  border: 4px solid #2e2600;
  border-radius: 58% 54% 46% 50%;
  background: #ffd62e;
  transform: rotate(-4deg);
}

.eye,
.beak,
.wing,
.note {
  position: absolute;
}

.eye {
  top: 58px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #2e2600;
}

.eye.left { left: 55px; }
.eye.right { right: 55px; }

.beak {
  top: 82px;
  left: 82px;
  width: 0;
  height: 0;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-top: 24px solid #ff8b2a;
}

.wing {
  right: 18px;
  bottom: 42px;
  width: 58px;
  height: 42px;
  border: 4px solid #2e2600;
  border-radius: 50%;
  background: #fff08a;
}

.note {
  font-size: 34px;
  color: #0f9f68;
}
.note-one { left: -28px; top: 18px; }
.note-two { right: -24px; top: -12px; }

.progress-strip {
  margin: 32px 0;
}

.stat-card {
  flex: 1;
  padding: 22px;
  border: 3px dashed #2e2600;
  border-radius: 24px;
  background: #fff8c8;
  text-align: center;
}

.stat-card strong {
  display: block;
  font-size: 30px;
}

.lesson-layout {
  align-items: stretch;
}

.path-card {
  width: 360px;
  padding: 24px;
}

.path-line {
  display: grid;
  gap: 18px;
}

.lesson-node {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  text-align: left;
  background: #fff;
}

.lesson-node span {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #ffcf24;
}

.lesson-node.active {
  background: #9cffc5;
}

.lesson-node.locked {
  opacity: .55;
}

.practice-card {
  flex: 1;
  padding: 28px;
}

.challenge-box {
  padding: 22px;
  border-radius: 26px;
  background: #fffdf0;
  border: 3px solid #2e2600;
}

.staff-lines {
  position: relative;
  height: 120px;
  margin-bottom: 18px;
}

.staff-lines span {
  display: block;
  height: 2px;
  margin: 18px 0;
  background: #2e2600;
}

.note-dot {
  position: absolute;
  width: 26px;
  height: 20px;
  border: 3px solid #2e2600;
  border-radius: 50%;
  background: #ffcf24;
}

.note-dot.one { left: 12%; top: 66px; }
.note-dot.two { left: 34%; top: 48px; }
.note-dot.three { left: 56%; top: 30px; }

.challenge-box li {
  margin: 10px 0;
  font-size: 18px;
}

.answer-row {
  flex-wrap: wrap;
  margin: 22px 0;
}

.feedback {
  padding: 16px 18px;
  border-radius: 18px;
  background: #fff4a3;
  border: 3px solid #2e2600;
  font-weight: 900;
}

.feedback.success { background: #9cffc5; }
.feedback.warning { background: #ffd38a; }

@media (max-width: 900px) {
  .hero-grid,
  .lesson-layout,
  .progress-strip {
    flex-direction: column;
  }

  .path-card,
  .bird-card {
    width: auto;
  }
}
</style>
