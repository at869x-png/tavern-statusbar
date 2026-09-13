<template>
  <div class="status-bar-container">
    <!-- 世界信息 -->
    <div class="section world-section">
      <div class="section-title">世界状态</div>
      <div class="info-grid">
        <div class="info-item">
          <span class="label">时间</span>
          <span class="value">{{ data?.世界?.当前时间 || '加载中...' }}</span>
        </div>
        <div class="info-item">
          <span class="label">学期</span>
          <span class="value">{{ data?.世界?.当前学期 || '加载中...' }}</span>
        </div>
        <div class="info-item">
          <span class="label">下次考核</span>
          <span class="value countdown">{{ data?.世界?.距离下次考核天数 || 0 }}天</span>
        </div>
        <div class="info-item full-width">
          <span class="label">当前场景</span>
          <span class="value">{{ data?.世界?.当前场景 || '加载中...' }}</span>
        </div>
      </div>
    </div>

    <!-- 苏浅浅状态 -->
    <div class="section character-section">
      <div class="section-title">苏浅浅</div>
      <div class="character-stats">
        <div class="stat-row">
          <span class="stat-label">魔法评级</span>
          <span class="stat-value rank" :class="'rank-' + data?.苏浅浅?.魔法评级">
            {{ data?.苏浅浅?.魔法评级 || 'D' }}级
          </span>
        </div>
        <div class="stat-row">
          <span class="stat-label">关系状态</span>
          <span class="stat-value relationship">{{ data?.苏浅浅?.关系状态 || '主仆' }}</span>
        </div>
        <div class="stat-bar-container">
          <div class="stat-bar-label">
            <span>好感度</span>
            <span>{{ data?.苏浅浅?.好感度 || 0 }}/100</span>
          </div>
          <div class="stat-bar">
            <div class="stat-bar-fill" :style="{ width: (data?.苏浅浅?.好感度 || 0) + '%' }"></div>
          </div>
        </div>
        <div class="stat-bar-container">
          <div class="stat-bar-label">
            <span>理论成绩</span>
            <span>{{ data?.苏浅浅?.理论成绩 || 0 }}/100</span>
          </div>
          <div class="stat-bar">
            <div class="stat-bar-fill theory" :style="{ width: (data?.苏浅浅?.理论成绩 || 0) + '%' }"></div>
          </div>
        </div>
        <div class="stat-bar-container">
          <div class="stat-bar-label">
            <span>实战能力</span>
            <span>{{ data?.苏浅浅?.实战能力 || 0 }}/100</span>
          </div>
          <div class="stat-bar">
            <div class="stat-bar-fill combat" :style="{ width: (data?.苏浅浅?.实战能力 || 0) + '%' }"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 其他女主状态（已出场的） -->
    <div v-if="data?.林静雪?.是否已出场" class="section character-section mini">
      <div class="section-title">林静雪 <span class="rank rank-A+">A+级</span></div>
      <div class="mini-stats">
        <div class="stat-row">
          <span class="stat-label">关系</span>
          <span class="stat-value">{{ data?.林静雪?.关系状态 }}</span>
        </div>
        <div class="stat-bar-mini">
          <div class="stat-bar-fill" :style="{ width: (data?.林静雪?.好感度 || 0) + '%' }"></div>
        </div>
        <span class="stat-value-small">好感度 {{ data?.林静雪?.好感度 }}/100</span>
      </div>
    </div>

    <div v-if="data?.顾雨晴?.是否已出场" class="section character-section mini">
      <div class="section-title">顾雨晴 <span class="rank rank-S">S级</span></div>
      <div class="mini-stats">
        <div class="stat-row">
          <span class="stat-label">关系</span>
          <span class="stat-value">{{ data?.顾雨晴?.关系状态 }}</span>
        </div>
        <div class="stat-bar-mini">
          <div class="stat-bar-fill" :style="{ width: (data?.顾雨晴?.好感度 || 0) + '%' }"></div>
        </div>
        <span class="stat-value-small">好感度 {{ data?.顾雨晴?.好感度 }}/100</span>
      </div>
    </div>

    <div v-if="data?.艾莉丝?.是否已出场" class="section character-section mini">
      <div class="section-title">艾莉丝 <span class="rank rank-SSR">SSR级</span></div>
      <div class="mini-stats">
        <div class="stat-row">
          <span class="stat-label">关系</span>
          <span class="stat-value">{{ data?.艾莉丝?.关系状态 }}</span>
        </div>
        <div class="stat-bar-mini">
          <div class="stat-bar-fill" :style="{ width: (data?.艾莉丝?.好感度 || 0) + '%' }"></div>
        </div>
        <span class="stat-value-small">好感度 {{ data?.艾莉丝?.好感度 }}/100</span>
      </div>
    </div>

    <div v-if="data?.陆薇薇?.是否已出场" class="section character-section mini">
      <div class="section-title">陆薇薇 <span class="rank rank-SR">SR级</span></div>
      <div class="mini-stats">
        <div class="stat-row">
          <span class="stat-label">关系</span>
          <span class="stat-value">{{ data?.陆薇薇?.关系状态 }}</span>
        </div>
        <div class="stat-bar-mini">
          <div class="stat-bar-fill" :style="{ width: (data?.陆薇薇?.好感度 || 0) + '%' }"></div>
        </div>
        <span class="stat-value-small">好感度 {{ data?.陆薇薇?.好感度 }}/100</span>
      </div>
    </div>

    <!-- 主线进度 -->
    <div class="section progress-section">
      <div class="section-title">主线进度</div>
      <div class="progress-info">
        <div class="progress-stage">{{ data?.主线进度?.当前阶段 || '适应与成长' }}</div>
        <div class="progress-details">
          <div class="detail-item">
            <span class="detail-label">已出场女主</span>
            <span class="detail-value">{{ data?.主线进度?.已出场女主?.length || 0 }}/5</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">完成事件</span>
            <span class="detail-value">{{ data?.主线进度?.已发生事件?.length || 0 }}/10</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from './store';

const { data } = useDataStore();
</script>

<style scoped>
.status-bar-container {
  font-family: 'Microsoft YaHei', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  border-radius: 12px;
  color: #fff;
  max-width: 800px;
  margin: 0 auto;
}

.section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-item.full-width {
  grid-column: 1 / -1;
}

.label {
  font-size: 12px;
  opacity: 0.8;
}

.value {
  font-size: 16px;
  font-weight: bold;
}

.countdown {
  color: #ffd700;
}

.character-stats {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-label {
  font-size: 14px;
  opacity: 0.9;
}

.stat-value {
  font-size: 16px;
  font-weight: bold;
}

.rank {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 14px;
}

.rank-D { background: #888; }
.rank-C { background: #4a90e2; }
.rank-B { background: #50c878; }
.rank-A { background: #ffa500; }
.rank-A\\+ { background: #ff6b6b; }
.rank-S { background: #9b59b6; }
.rank-SR { background: #e74c3c; }
.rank-SSR { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }

.stat-bar-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-bar-label {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  opacity: 0.9;
}

.stat-bar {
  height: 8px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  overflow: hidden;
}

.stat-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  transition: width 0.3s ease;
}

.stat-bar-fill.theory {
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
}

.stat-bar-fill.combat {
  background: linear-gradient(90deg, #fa709a 0%, #fee140 100%);
}

.character-section.mini {
  padding: 10px 15px;
}

.mini-stats {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stat-bar-mini {
  height: 6px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  overflow: hidden;
}

.stat-value-small {
  font-size: 11px;
  opacity: 0.8;
  text-align: right;
}

.progress-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.progress-stage {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
}

.progress-details {
  display: flex;
  justify-content: space-around;
}

.detail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.detail-label {
  font-size: 12px;
  opacity: 0.8;
}

.detail-value {
  font-size: 18px;
  font-weight: bold;
  color: #ffd700;
}
</style>
