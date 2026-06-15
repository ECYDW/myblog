import type { CommentConfig } from "../types/config";
import { SITE_LANG } from "./siteConfig";

// 评论系统配置
export const commentConfig: CommentConfig = {
  enable: true, // 启用评论功能
  system: "giscus", // 改为 Giscus 评论系统
  twikoo: {
    envId: "https://twikoo.vercel.app",
    lang: SITE_LANG,
  },
  giscus: {
    repo: "ECYDW/myblog", // 你的仓库名（必须是 用户名/仓库名 格式）
    repoId: "R_kgDOS5sH6w", // 从 Giscus 页面复制
    category: "Announcements", // 建议用 Announcements 分类
    categoryId: "DIC_kwDOS5sH684C_Ld6", // 从 Giscus 页面复制
    mapping: "pathname", // 按文章路径绑定评论，保证每篇文章评论独立
    strict: "0",
    reactionsEnabled: "1", // 开启表情反应（点赞/踩）
    emitMetadata: "0",
    inputPosition: "bottom", // 评论框放在评论区底部
    theme: "preferred_color_scheme", // 自动跟随博客明暗模式
    lang: SITE_LANG, // 和博客语言保持一致
    loading: "lazy",
  },
};