# 待辦清單 Web App

這是在 GitHub Copilot 實戰工作坊中完成的純前端待辦清單應用程式，展示原生網頁技術、瀏覽器資料保存，以及 AI 輔助開發工作流程。

## 線上展示

[開啟 GitHub Pages 示範](https://liao-jian-peng.github.io/GitHub-Copilot-workshop-Jpeng/)

## 功能

- 新增、完成、刪除待辦事項，並拒絕空白內容。
- 使用篩選檢視全部、未完成或已完成的事項。
- 記住篩選條件與深色模式偏好；首次使用時依作業系統主題設定。
- 在篩選結果為空時說明項目只是被篩選，不代表已刪除。
- 確認後一次清除已完成事項，並保留未完成項目。
- 以 `localStorage` 保存待辦資料與偏好，重新整理後仍可使用。
- 提供響應式卡片介面與鍵盤／螢幕閱讀器標籤。

## 技術

| 項目 | 使用方式 |
| --- | --- |
| 前端 | HTML、CSS、原生 JavaScript |
| 框架與套件 | 未使用；沒有 `package.json` 或建置流程 |
| 外部資源 | 不依賴 CDN，可離線開啟 |
| 儲存 | 瀏覽器 `localStorage` |
| 主題 | CSS 變數、`prefers-color-scheme` |
| 部署 | GitHub Pages |

## 開發方式

- 使用 Copilot Agent Mode 建立並逐步擴充待辦清單。
- 在 `.vscode/mcp.json` 設定 Microsoft Learn 與 GitHub MCP；透過 GitHub MCP 查閱 Issue #2。
- 建立 `.github/copilot-instructions.md` 與 `.github/prompts/fix-issue.prompt.md`，記錄專案規則及可重複使用的修 Issue 流程。
- 依 GitHub Issue 修正篩選提示與清除已完成事項功能，並透過 Pull Request 審查與合併。
- 使用整合瀏覽器驗證篩選、重新整理、確認刪除及資料保存行為。

## 我學到什麼

- 將需求、限制與驗收方式說清楚，有助於 Agent 一次完成跨檔案工作。
- AI 產生的變更仍需透過瀏覽器操作與版本控制檢查。
- 把專案規則與任務流程寫成可版控的檔案，能讓重複工作更一致。
- MCP 可讓 AI 在適當授權下查閱本機以外的工具與資料。
- 對不可逆操作提供確認，並清楚回饋篩選狀態，有助於避免使用者誤解。
