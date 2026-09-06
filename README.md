# uiskin-theme — Blue Glass Theme / 海洋幻想主题

**uiskin-theme** is a **static plugin bundle (profile bundle)** for DeepSeek Harness Web: a crisp ocean background, glass bubbles, an ocean-styled sidebar (with a gold-gradient「HARNESS」wordmark and a bottom cartoon character), a whale settings button, gradient model text, and a one-click **light/dark theme toggle** on the conversation header.

**uiskin-theme** 是 DeepSeek Harness Web 的**静态插件包（profile bundle）**：清澈的海洋背景、玻璃气泡、海洋侧边栏（含金色渐变「HARNESS」字标与底部卡通角色）、鲸鱼设置按钮、渐变模型文字，以及会话头部一键切换**明/暗主题**按钮。

Unlike dynamic plugins (`cordis_define` defined at runtime, lost on restart), this package is installed into the profile as an npm package: **it loads automatically on every start, survives restarts, and needs no manual approval**.

与动态插件（`cordis_define` 现场定义、重启即丢）不同，本包以 npm 包形式装进 profile，**每次启动自动加载，重启不丢，无需人工批准**。

![Blue Glass Theme 浅色模式预览 / light mode](assets/preview_light.jpg)

![Blue Glass Theme 深色模式预览 / dark mode](assets/preview_dark.jpg)

> **License / 许可证**
> This theme is an original work and is **All Rights Reserved** — it is NOT open source.
> Without written permission from the author, you may not copy, modify, redistribute, create derivative works, or use it commercially; it may only be installed as-is and used personally.
>
> 本主题为原创作品，**保留所有权利（All Rights Reserved）**，非开源协议。
> 未经作者书面许可，不得复制、修改、再分发、二次创作或用于商业用途；仅允许按原样安装与个人使用。

## Installation / 安装

You need Node.js and [pnpm](https://pnpm.io/installation), plus a working `dsh` CLI (`npx @deepseek-ai/dsh` also works).

需要已安装 Node.js 与 [pnpm](https://pnpm.io/installation)，并已能运行 `dsh` CLI（`npx @deepseek-ai/dsh` 亦可）。

```bash
# Install from GitHub (replace USERNAME with your GitHub username)
# 从 GitHub 安装（把 USERNAME 换成你的 GitHub 用户名）
dsh plugin --profile web add github:USERNAME/dsh-uiskin-theme

# Or a specific branch / commit  /  或指定分支 / 提交
dsh plugin --profile web add github:USERNAME/dsh-uiskin-theme#main
```

After installing, restart `dsh web` (or it takes effect on the next start).

装完后重启 `dsh web`（或下次启动时）即自动生效。

What the install does: `dsh plugin` runs pnpm inside `~/.dsh/profiles/web/`, sees the package's `dsh.bundle.patch` declaration, adds it to `dsh.profile.bundles`, and it is loaded by boot at startup.

安装做了什么：`dsh plugin` 会在 `~/.dsh/profiles/web/` 里执行 pnpm 安装，识别到包的 `dsh.bundle.patch` 声明后把它加入 `dsh.profile.bundles`，启动时由 boot 加载。

## Uninstall / 卸载

```bash
dsh plugin --profile web remove uiskin-theme
```

> **Repo name vs package name / 仓库名与包名**
> The GitHub repository is `dsh-uiskin-theme` (previously `uiskin-theme`), while the installed **package name** is `uiskin-theme` (from the `name` field of `package.json`). So install with `github:USERNAME/dsh-uiskin-theme` and uninstall with `remove uiskin-theme`.
>
> GitHub 仓库为 `dsh-uiskin-theme`（曾用名 `uiskin-theme`），而安装后的**插件包名**是 `uiskin-theme`（取自 `package.json` 的 `name`）。因此安装用 `github:USERNAME/dsh-uiskin-theme`，卸载用 `remove uiskin-theme`。

## How it works / 工作原理

```
package.json        dsh.bundle.patch → cordis.patch.yml  (registers the boot row / 注册启动行)
                    dsh.client        → declares the browser half /plugins/uiskin-theme/client.js
                                          声明浏览器半 /plugins/uiskin-theme/client.js
cordis.patch.yml    - insert: [{ id: uiskin-theme, name: uiskin-theme }]
lib/index.js        Host half: no-op (the whole skin lives in the browser half)
                    Host 半：空实现（皮肤全在浏览器侧）
lib/client.js       Browser half: injects CSS + inlined data-URI assets + slot components
                    浏览器半：注入 CSS + 内联 data URI 素材 + 槽位组件
assets/             Source images (inlined as base64 at build time; no disk reads or
                    absolute paths at runtime)
                    原始图片（构建时内联为 base64，运行时不读磁盘、无绝对路径）
```

## Local development / rebuild / 本地开发 / 重新构建

```bash
npm install        # only what the build script needs (this package has no runtime deps)
                   # 仅安装 scripts 运行所需（本包无运行时依赖）
npm run build      # inlines assets/ into data URIs, regenerating lib/client.js
                   # 把 assets/ 内联成 data URI，重新生成 lib/client.js
```

To restyle the theme, edit the CSS / components in `scripts/client.template.js`, or replace the images under `assets/` and rebuild. **Remember to commit `lib/client.js` along with the change** — someone installing from git will not (and does not need to) run the build script.

修改皮肤请编辑 `scripts/client.template.js` 里的 CSS / 组件，或替换 `assets/` 下的图片后重新构建。**改完记得把 `lib/client.js` 一起提交**——别人从 git 安装时不会（也不需要）执行构建脚本。

## Notes / 注意事项

- Assets are inlined as base64 into `lib/client.js` (~1.1 MB) and loaded once, suitable for small skin images. To shrink it, compress the images under `assets/` first and rebuild.
  - 素材以 base64 内联在 `lib/client.js`（约 1.1 MB），加载一次即可，适合皮肤类小图片。若想更小，可先把 `assets/` 里的图压缩再构建。
- DSH is currently a `0.1.2-rc.1` pre-release; the plugin API (`dsh.bundle` / `dsh.client` / slots / theme services) and some client class names may change between releases. When upgrading DSH, a few theme elements (bubbles, sidebar) can briefly lose styling if their CSS class hashes change — this theme tracks those renames and adds the matching selectors. If you hit compatibility issues after upgrading DSH, watch this repo's updates.
  - DSH 目前是 `0.1.2-rc.1` 预发布版本，插件 API（`dsh.bundle` / `dsh.client` / slots / theme 服务）及部分客户端类名可能随版本变化。升级 DSH 后，个别主题元素（气泡、侧栏）可能因类名 hash 变化而暂时失去样式——本主题会跟踪这些改名并补充对应选择器；如升级后遇兼容问题，关注本仓库的更新。
- This package only depends on `@deepseek-ai/cordis` (peer) and `react` (peer); no `allowBuilds` approval is needed to run its build scripts.
  - 本包只依赖 `@deepseek-ai/cordis`（peer）与 `react`（peer），无需 `allowBuilds` 放行构建脚本。

## Other / 其他

- Making this takes effort, and your support is what drives us. If you like it, please give it a star; for suggestions or bugs, contact shutiaochou@gmail.com.
  - 制作不易，您的支持才是我们开发的动力。如果喜欢，欢迎点一个 star；如需提建议或反馈 Bug，请联系 shutiaochou@gmail.com。
