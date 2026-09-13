import { defineMvuDataStore } from '@util/mvu';

// 定义MVU数据结构的Zod schema
const gameStateSchema = z.object({
  世界: z.object({
    当前时间: z.string(),
    当前学期: z.string(),
    距离下次考核天数: z.number(),
    当前场景: z.string(),
  }),
  苏浅浅: z.object({
    魔法评级: z.string(),
    住宿等级: z.string(),
    理论成绩: z.number(),
    实战能力: z.number(),
    魔力总量: z.number(),
    好感度: z.number(),
    关系状态: z.string(),
  }),
  user状态: z.object({
    右手能力熟练度: z.number(),
    已复制魔法列表: z.array(z.string()),
  }),
  林静雪: z.object({
    好感度: z.number(),
    关系状态: z.string(),
    魔法评级: z.string(),
    是否已出场: z.boolean(),
    家族逼婚状态: z.string(),
  }),
  顾雨晴: z.object({
    好感度: z.number(),
    关系状态: z.string(),
    魔法评级: z.string(),
    是否已出场: z.boolean(),
    研究进度: z.number(),
  }),
  艾莉丝: z.object({
    好感度: z.number(),
    关系状态: z.string(),
    魔法评级: z.string(),
    是否已出场: z.boolean(),
    在学院停留天数: z.number(),
  }),
  陆薇薇: z.object({
    好感度: z.number(),
    关系状态: z.string(),
    魔法评级: z.string(),
    是否已出场: z.boolean(),
    调查进度: z.number(),
    信任user: z.boolean(),
  }),
  主线进度: z.object({
    当前阶段: z.string(),
    已出场女主: z.array(z.string()),
    已发生事件: z.array(z.string()),
  }),
});

export type GameState = z.infer<typeof gameStateSchema>;

// 创建响应式MVU数据存储
export const useDataStore = defineMvuDataStore(
  gameStateSchema,
  { type: 'message', message_id: 'latest' }
);
