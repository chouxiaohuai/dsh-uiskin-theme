// uiskin-theme — Blue Glass Theme (ocean fantasy) client half — TEMPLATE.
// The five data-URI constants below (BG_URI, STICKER_URI, SETTINGS_DECOR_URI,
// SETTINGS_DIVIDER_URI, NEW_SESSION_SKIN_URI) are filled with base64 data URIs
// by scripts/build-client.mjs, which writes lib/client.js. Do not edit
// lib/client.js by hand; edit this template and rebuild.
window.__ModuleLoader__.load({
  id: "uiskin-theme",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    const React = require("react");

    const BG_URI = "__BG_URI__";
    const STICKER_URI = "__STICKER_URI__";
    const SETTINGS_DECOR_URI = "__SETTINGS_DECOR_URI__";
    const SETTINGS_DIVIDER_URI = "__SETTINGS_DIVIDER_URI__";
    const NEW_SESSION_SKIN_URI = "__NEW_SESSION_SKIN_URI__";

    // Inject one stylesheet as a <style> tag, removed on unload (the static
    // twin of the dynamic runner's `styles.insert`).
    function insertStyle(css) {
      const tag = document.createElement("style");
      tag.setAttribute("data-plugin-css", "uiskin-theme");
      tag.textContent = css;
      document.head.appendChild(tag);
      return () => { tag.remove() };
    }

    const TOKENS = {
      '--dsw-alias-bg-base': { light: 'rgba(236, 244, 252, 0.55)', dark: 'rgba(8, 20, 46, 0.42)' },
      '--dsw-alias-bg-layer-1': { light: 'rgba(250, 252, 255, 0.95)', dark: 'rgba(15, 34, 74, 0.80)' },
      '--dsw-alias-bg-layer-2': { light: 'rgba(243, 247, 253, 0.95)', dark: 'rgba(22, 46, 94, 0.78)' },
      '--dsw-alias-bg-overlay': { light: 'rgba(248, 251, 255, 0.98)', dark: 'rgba(10, 24, 54, 0.95)' },
      '--dsw-alias-border-l1': { light: 'rgba(59, 130, 246, 0.28)', dark: 'rgba(96, 165, 250, 0.30)' },
      '--dsw-alias-border-l2': { light: 'rgba(59, 130, 246, 0.55)', dark: 'rgba(96, 165, 250, 0.55)' },
      '--dsw-alias-brand-primary': { light: '#2563c0', dark: '#5b9cf5' },
      '--dsw-alias-label-primary': { light: '#0d2a56', dark: '#eef4fd' },
      '--dsw-alias-label-secondary': { light: '#46608c', dark: '#a7bfe3' },
      '--dsw-alias-state-error-primary': { light: '#dc2626', dark: '#f87171' },
      '--dsw-alias-state-success-primary': { light: '#16a34a', dark: '#4ade80' },
      '--dsw-alias-state-warn-primary': { light: '#d97706', dark: '#fbbf24' },
      '--dsw-specific-sidebar-fill': { light: 'rgba(205, 224, 246, 0.66)', dark: 'rgba(9, 22, 50, 0.66)' },
    }

    const BASE_CSS = [
      ':root { --ds-theme-bg-image: linear-gradient(135deg, #dceaf8 0%, #9cc0e8 22%, #6b9ad8 45%, #3a6cb8 72%, #16325f 100%); }',
      'html, body { min-height: 100%; background-color: #a8c6e4; }',
      '.pI_x6G_centerCol { position: relative; overflow: hidden; background-color: #c8dcf0; background-image: linear-gradient(rgba(5, 14, 34, 0.18), rgba(5, 14, 34, 0.18)), var(--ds-theme-bg-image); background-size: cover, cover; background-position: center, center; background-repeat: no-repeat, no-repeat; }',
      '.pI_x6G_centerCol > * { background: transparent; }',
      'body:not([data-ds-dark-theme]) { --dsw-specific-bubble: #f6f9ff !important; }',
      '.hHd-Xa_footerActions { flex-wrap: wrap; }',
    ].join('\n')

    const OCEAN_WAVE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 12' preserveAspectRatio='none'%3E%3Cpath d='M0 6 C15 0 15 0 30 6 C45 12 45 12 60 6 C75 0 75 0 90 6 C105 12 105 12 120 6 L120 12 L0 12 Z' fill='%2338bdf8' fill-opacity='0.35'/%3E%3C/svg%3E"

    const OCEAN_GLASS = 'border: 1px solid transparent; background: linear-gradient(var(--dsh-ocean-glass), var(--dsh-ocean-glass)) padding-box, linear-gradient(135deg, rgba(125,211,252,0.18) 0%, rgba(37,99,180,0.45) 35%, rgba(56,189,248,0.45) 65%, rgba(186,230,253,0.25) 100%) border-box; backdrop-filter: blur(14px) saturate(150%); -webkit-backdrop-filter: blur(14px) saturate(150%); box-shadow: 0 0 0 1px rgba(56,189,248,0.05), 0 12px 32px rgba(10,40,90,0.16), 0 2px 8px rgba(10,40,90,0.10), inset 0 1px 0 rgba(255,255,255,0.45);'

    const OCEAN_CSS = [
      ':root { --dsh-ocean-glass: rgba(255, 255, 255, 0.62); }',
      'body[data-ds-dark-theme] { --dsh-ocean-glass: rgba(22, 38, 70, 0.5); }',
      // DSH renamed the chat bubble class after an update (gdEzaW_bubble ->
      // Sixlwa_bubble). The bubble now backgrounds with
      // var(--dsw-specific-bubble), which the theme overrides to near-white, so
      // the bubbles lost their edge and visually vanished. Restyle the NEW class
      // with the same ocean glass; keep the old ones for backward compatibility.
      // Use !important so it beats the app's --dsw-specific-bubble background.
      '.Sixlwa_bubble { position: relative; ' + OCEAN_GLASS + ' }',
      '.Sixlwa_bubble, .Sixlwa_bubble * { box-sizing: border-box; }',
      // ASSISTANT messages: the theme used to frame them with a glass bubble via
      // .Sxvs8a_root, but DSH renamed/wrapped it. In 0.1.2 the assistant reply
      // body renders as .hWmORq_root (AssistantMarkdown) with no background, so
      // replies visually disappear into the page. Frame it with the same ocean
      // glass so assistant replies get their bubble back.
      '.hWmORq_root { position: relative; border-radius: 22px; padding: 12px 16px; ' + OCEAN_GLASS + ' }',
      '.hWmORq_root .hWmORq_actions { margin-top: 12px; }',
      '.gdEzaW_bubble { position: relative; ' + OCEAN_GLASS + ' }',
      '[data-composer-card] { position: relative; ' + OCEAN_GLASS + ' }',
      '.Sxvs8a_root { padding: 14px 18px; border-radius: 20px; position: relative; ' + OCEAN_GLASS + ' }',
      '.Sixlwa_bubble::before, .gdEzaW_bubble::before, .hWmORq_root::before, [data-composer-card]::before, .Sxvs8a_root::before { content: ""; position: absolute; top: 1px; left: 10%; right: 10%; height: 6px; background-image: url("' + OCEAN_WAVE + '"); background-repeat: repeat-x; background-size: 48px 6px; pointer-events: none; opacity: 0.28; }',
      '.Sixlwa_bubble::after, .gdEzaW_bubble::after, .hWmORq_root::after, [data-composer-card]::after, .Sxvs8a_root::after { content: ""; position: absolute; top: 0; right: 0; bottom: 0; left: 0; border-radius: 22px; pointer-events: none; background-image: radial-gradient(circle at 88% 82%, rgba(186,230,253,0.4) 0 4px, transparent 5px), radial-gradient(circle at 8% 90%, rgba(125,211,252,0.35) 0 3px, transparent 4px), radial-gradient(circle at 92% 16%, rgba(255,255,255,0.35) 0 3px, transparent 4px); }',
    ].join('\n')

    const FLOURISH = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 36'%3E%3Cpath d='M4 24 C14 14 20 14 30 24 S46 34 56 24' fill='none' stroke='rgba(120,170,225,0.55)' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M12 30 C22 20 28 20 38 30' fill='none' stroke='rgba(200,167,106,0.4)' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M72 12 L76 17 L81 19 L76 21 L72 26 L68 21 L63 19 L68 17 Z' fill='rgba(150,200,245,0.55)'/%3E%3Ccircle cx='60' cy='30' r='1.5' fill='rgba(200,167,106,0.5)'/%3E%3C/svg%3E"

    const WHALE_EMBLEM = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 560 46'%3E%3Cpath d='M14 26 C70 18 110 18 170 26 S240 34 265 26' fill='none' stroke='rgba(130,180,235,0.45)' stroke-width='1.4' stroke-linecap='round'/%3E%3Cpath d='M14 32 C70 24 110 24 170 32 S240 40 265 32' fill='none' stroke='rgba(200,175,130,0.3)' stroke-width='1' stroke-linecap='round'/%3E%3Cpath d='M546 26 C490 18 450 18 390 26 S320 34 295 26' fill='none' stroke='rgba(130,180,235,0.45)' stroke-width='1.4' stroke-linecap='round'/%3E%3Cpath d='M546 32 C490 24 450 24 390 32 S320 40 295 32' fill='none' stroke='rgba(200,175,130,0.3)' stroke-width='1' stroke-linecap='round'/%3E%3Cpath d='M180 20 L183 23.5 L180 27 L177 23.5 Z' fill='rgba(150,200,245,0.55)'/%3E%3Cpath d='M380 20 L383 23.5 L380 27 L377 23.5 Z' fill='rgba(150,200,245,0.55)'/%3E%3Cpath d='M280 8 C276 16 268 20 260 20 C262 26 270 30 280 30 C290 30 298 26 300 20 C292 20 284 16 280 8 Z' fill='rgba(120,185,245,0.75)' stroke='rgba(200,175,130,0.65)' stroke-width='1.2'/%3E%3Cpath d='M280 16 L285 22 L280 28 L275 22 Z' fill='rgba(170,215,250,0.9)' stroke='rgba(200,175,130,0.8)' stroke-width='1'/%3E%3C/svg%3E"

    const COMPOSER_CSS = [
      '[data-composer-card] { border: 1px solid transparent !important; background: linear-gradient(180deg, rgba(249,252,255,0.85), rgba(226,241,253,0.62)) padding-box, linear-gradient(135deg, rgba(140,195,245,0.45), rgba(205,230,252,0.7), rgba(140,195,245,0.35)) border-box !important; backdrop-filter: blur(18px) saturate(150%); -webkit-backdrop-filter: blur(18px) saturate(150%); box-shadow: 0 0 0 1px rgba(150,200,245,0.08), 0 10px 36px rgba(40,90,160,0.16), 0 0 28px rgba(150,205,250,0.2), inset 0 1px 0 rgba(255,255,255,0.6); }',
      '[data-composer-card]::before { content: ""; position: absolute; top: -22px; left: 50%; transform: translateX(-50%); width: 62%; aspect-ratio: 12.17; background-image: url("' + WHALE_EMBLEM + '"); background-size: 100% 100%; background-repeat: no-repeat; background-position: center; pointer-events: none; z-index: 1; }',
      '[data-composer-card]::after { content: ""; position: absolute; top: 0; right: 0; bottom: 0; left: 0; border-radius: 22px; pointer-events: none; background-image: radial-gradient(circle at 14px 14px, rgba(160,210,250,0.5) 0 4px, rgba(160,210,250,0.15) 4px 5px, transparent 6px), radial-gradient(circle at calc(100% - 14px) 14px, rgba(160,210,250,0.5) 0 4px, rgba(160,210,250,0.15) 4px 5px, transparent 6px), radial-gradient(circle at 14px calc(100% - 14px), rgba(160,210,250,0.5) 0 4px, rgba(160,210,250,0.15) 4px 5px, transparent 6px), radial-gradient(circle at calc(100% - 14px) calc(100% - 14px), rgba(160,210,250,0.5) 0 4px, rgba(160,210,250,0.15) 4px 5px, transparent 6px), radial-gradient(circle at 22% 18%, rgba(186,230,253,0.28) 0 2px, transparent 3px), radial-gradient(circle at 66% 24%, rgba(186,230,253,0.22) 0 3px, transparent 4px), radial-gradient(circle at 30% 78%, rgba(186,230,253,0.2) 0 2px, transparent 3px), radial-gradient(circle at 78% 70%, rgba(186,230,253,0.18) 0 2px, transparent 3px); }',
      '[data-composer-card] .uV2eYG_add, [data-composer-card] .uV2eYG_tools button { width: 30px !important; height: 30px !important; border-radius: 50% !important; background: rgba(255,255,255,0.55) !important; border: 1px solid rgba(200,175,130,0.45) !important; box-shadow: 0 2px 6px rgba(40,90,160,0.12), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(150,200,245,0.25); color: #2f4a6b !important; transition: background-color 0.15s ease, box-shadow 0.15s ease; }',
      '[data-composer-card] .uV2eYG_add:hover, [data-composer-card] .uV2eYG_tools button:hover { background: rgba(255,255,255,0.75) !important; box-shadow: 0 0 0 1px rgba(150,200,245,0.4), 0 2px 8px rgba(120,180,240,0.25), inset 0 1px 0 rgba(255,255,255,0.8); }',
      '.uV2eYG_primary { width: 34px !important; height: 34px !important; border-radius: 50% !important; background: linear-gradient(180deg, rgba(150,200,245,0.7), rgba(110,170,225,0.6)) !important; border: 1px solid rgba(200,225,250,0.6) !important; box-shadow: 0 2px 8px rgba(60,120,190,0.25), inset 0 1px 0 rgba(255,255,255,0.5); color: #f2f8ff !important; }',
      '.uV2eYG_primary:hover:not(:disabled) { background: linear-gradient(180deg, rgba(165,212,248,0.8), rgba(125,182,235,0.7)) !important; box-shadow: 0 0 0 1px rgba(160,210,250,0.5), 0 2px 10px rgba(90,150,215,0.3), inset 0 1px 0 rgba(255,255,255,0.6); }',
      '[data-composer-card] textarea::placeholder { color: #7d97b8 !important; font-family: "STKaiti", "KaiTi", "STSong", "Georgia", serif; font-style: italic; letter-spacing: 0.04em; opacity: 0.9; }',
      // The composer card uses a light glass in both modes; in dark mode the app
      // turns the input text white, so white-on-light is unreadable. Give the
      // card a dark glass (and a lighter placeholder) in dark mode so the white
      // text is legible.
      'body[data-ds-dark-theme] [data-composer-card] { border: 1px solid transparent !important; background: linear-gradient(180deg, rgba(14,36,78,0.85), rgba(22,50,102,0.72)) padding-box, linear-gradient(135deg, rgba(60,110,175,0.55), rgba(100,150,210,0.4), rgba(60,110,175,0.5)) border-box !important; box-shadow: 0 0 0 1px rgba(90,140,205,0.28), 0 10px 36px rgba(6,18,42,0.45), 0 0 28px rgba(90,150,220,0.15), inset 0 1px 0 rgba(110,160,220,0.22); }',
      'body[data-ds-dark-theme] [data-composer-card] textarea::placeholder { color: #9dbde0 !important; }',
      // NOTE: we deliberately do NOT override z-index on the composer here.
      // In DSH 0.1.2 the active composer seat relies on z-index:7 +
      // position:sticky + a gradient backdrop to COVER the message list as it
      // scrolls underneath; forcing z-index:auto made messages paint over the
      // input box. The original reason for that override (the settings modal
      // being out-stacked by the composer) is fixed at its source instead — the
      // sidebar footer is no longer a stacking context, so the modal's
      // z-index:1000 propagates to the root context and covers the composer.
      //
      // The seat is the LAST child of the scroll body and stickers to the
      // bottom, so messages scroll underneath it BY DESIGN; the app occludes
      // them with a gradient that fades into --dsw-alias-bg-base. This theme
      // makes that token translucent (for the ocean glass), which let message
      // text ghost through the input area. Restore a genuinely opaque fade in
      // the theme's own surface colours — a real dock, not a blur overlay.
      '.wSkVaW_root[data-phase=active] .wSkVaW_composerSeat { background: linear-gradient(180deg, rgba(236,244,252,0) 0px, rgba(236,244,252,0.98) 44px); }',
      'body[data-ds-dark-theme] .wSkVaW_root[data-phase=active] .wSkVaW_composerSeat { background: linear-gradient(180deg, rgba(8,20,46,0) 0px, rgba(8,20,46,0.98) 44px); }',
    ].join('\n')

    const PERMISSION_CSS = [
      '.uV2eYG_modes { position: relative; }',
      '.uV2eYG_modes [role="menu"] { position: absolute !important; left: 0 !important; right: auto !important; bottom: calc(100% + 8px) !important; top: auto !important; z-index: 1200 !important; width: 300px !important; box-sizing: border-box !important; background: #ffffff !important; border: 1px solid #dfe4ea !important; border-radius: 12px !important; box-shadow: 0 10px 30px rgba(30, 60, 100, 0.16) !important; padding: 6px !important; margin: 0 !important; max-height: none !important; overflow: visible !important; }',
      '.uV2eYG_modes [role="menu"] > [role="presentation"] { display: flex !important; flex-direction: column !important; gap: 2px !important; }',
      '.uV2eYG_modes [role="menu"] [role="menuitem"] { display: flex !important; flex-direction: row !important; align-items: center !important; gap: 12px !important; width: 100% !important; min-height: 52px !important; height: auto !important; box-sizing: border-box !important; padding: 8px 12px !important; background: transparent !important; border: none !important; border-radius: 8px !important; text-align: left !important; color: #16335e !important; font-size: 14px !important; font-weight: 400 !important; opacity: 1 !important; visibility: visible !important; cursor: pointer !important; }',
      '.uV2eYG_modes [role="menu"] [role="menuitem"]:hover { background: rgba(59, 157, 245, 0.08) !important; }',
      '.uV2eYG_modes [role="menu"] [role="menuitem"]:has(> svg) { background: rgba(59, 157, 245, 0.10) !important; }',
      '.uV2eYG_modes [role="menu"] [role="menuitem"] > span:first-child { width: 36px !important; height: 36px !important; min-width: 36px !important; border-radius: 50% !important; background: rgba(59, 157, 245, 0.12) !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; flex: none !important; color: #3B9DF5 !important; }',
      '.uV2eYG_modes [role="menu"] [role="menuitem"] > span:nth-child(2) { flex: 1 1 auto !important; min-width: 0 !important; color: #16335e !important; font-size: 14px !important; line-height: 20px !important; white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }',
      '.uV2eYG_modes [role="menu"] [role="menuitem"] > svg { width: 16px !important; height: 16px !important; flex: none !important; color: #3B9DF5 !important; }',
    ].join('\n')

    const MODEL_CSS = [
      '._7KE1Ra_trigger { gap: 5px; }',
      '._7KE1Ra_triggerLabel { background: linear-gradient(90deg, #1d3f6e 0%, #2e6da8 45%, #3fa8d8 70%, #7fd4ec 100%); -webkit-background-clip: text !important; background-clip: text !important; -webkit-text-fill-color: transparent !important; color: transparent !important; font-size: 12px !important; font-weight: 700 !important; line-height: 18px !important; letter-spacing: 0.02em; font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif !important; filter: drop-shadow(0 1px 1px rgba(255,255,255,0.55)) drop-shadow(0 0 3px rgba(63,168,216,0.3)); }',
      '._7KE1Ra_triggerEffort { background: linear-gradient(90deg, #a97c3f 0%, #d9b36a 40%, #f0d48a 60%, #c9a05c 100%); -webkit-background-clip: text !important; background-clip: text !important; -webkit-text-fill-color: transparent !important; color: transparent !important; font-size: 12px !important; font-weight: 700 !important; line-height: 18px !important; letter-spacing: 0.03em; font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif !important; filter: drop-shadow(0 1px 1px rgba(255,255,255,0.5)) drop-shadow(0 0 4px rgba(233,196,124,0.45)); display: inline-flex; align-items: center; }',
      '._7KE1Ra_triggerEffort::before { content: "✦"; margin-right: 5px; color: rgba(150, 175, 205, 0.75); font-size: 8px; font-weight: 400; line-height: 1; text-shadow: 0 0 3px rgba(150, 200, 245, 0.6); }',
      // Dark mode: the gradient model-name text uses dark blues that fade into the
      // dark background (blurry/low contrast). Use bright pastel gradients and a
      // crisper drop-shadow so the model name and effort stay legible.
      'body[data-ds-dark-theme] ._7KE1Ra_triggerLabel { background: linear-gradient(90deg, #7fb2e8 0%, #9ecdf5 45%, #bfe0ff 70%, #e0f2ff 100%); -webkit-background-clip: text !important; background-clip: text !important; -webkit-text-fill-color: transparent !important; color: transparent !important; filter: drop-shadow(0 1px 1px rgba(180,220,255,0.35)); }',
      'body[data-ds-dark-theme] ._7KE1Ra_triggerEffort { background: linear-gradient(90deg, #e8bc72 0%, #f8dc9a 40%, #fff2c4 60%, #edc884 100%); -webkit-background-clip: text !important; background-clip: text !important; -webkit-text-fill-color: transparent !important; color: transparent !important; filter: drop-shadow(0 1px 1px rgba(255,235,190,0.35)); }',
      'body[data-ds-dark-theme] ._7KE1Ra_triggerEffort::before { color: rgba(220, 200, 150, 0.9); text-shadow: 0 0 3px rgba(255, 220, 150, 0.5); }',
      '._7KE1Ra_chevron { color: #5d7fa6 !important; width: 11px !important; height: 11px !important; filter: drop-shadow(0 0 3px rgba(120, 180, 235, 0.5)); }',
    ].join('\n')

    const THEME_TOGGLE_CSS = [
      // Round light/dark toggle. Ice-glass pill matching the theme: translucent
      // gradient fill, hairline blue border, and a soft inner highlight. The
      // colorful icons carry their own gradients, so the button keeps a quiet
      // water-glass surface that works in both light and dark modes.
      '.uiskin-theme-toggle { box-sizing: border-box; width: 32px; height: 32px; flex: none; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid var(--ocean-blue-line); background: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(214,235,252,0.55)); box-shadow: 0 2px 8px rgba(60,120,190,0.14), inset 0 1px 0 rgba(255,255,255,0.85), inset 0 -1px 0 rgba(150,200,245,0.22); color: var(--ocean-text); cursor: pointer; padding: 0; backdrop-filter: blur(8px) saturate(140%); -webkit-backdrop-filter: blur(8px) saturate(140%); transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease; }',
      '.uiskin-theme-toggle:hover:not(:disabled) { border-color: var(--ocean-blue-line); background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(226,242,254,0.72)); box-shadow: 0 0 0 1px rgba(150,205,250,0.45), 0 3px 12px rgba(80,140,210,0.24), inset 0 1px 0 rgba(255,255,255,0.92) !important; transform: translateY(-1px); }',
      '.uiskin-theme-toggle:focus-visible { outline: 2px solid rgba(90, 145, 205, 0.65); outline-offset: 2px; }',
      '.uiskin-theme-toggle:active:not(:disabled) { transform: translateY(0) scale(0.96); }',
      '.uiskin-theme-toggle svg { width: 17px; height: 17px; display: block; }',
      // Dark mode: swap to a cool dark-glass surface so the bright icons read clearly.
      'body[data-ds-dark-theme] .uiskin-theme-toggle { border-color: rgba(110,170,230,0.5); background: linear-gradient(180deg, rgba(20,44,90,0.82), rgba(28,58,116,0.66)); box-shadow: 0 2px 8px rgba(6,18,42,0.4), inset 0 1px 0 rgba(110,160,220,0.24), inset 0 -1px 0 rgba(70,120,190,0.2); }',
      'body[data-ds-dark-theme] .uiskin-theme-toggle:hover:not(:disabled) { background: linear-gradient(180deg, rgba(28,56,108,0.9), rgba(36,70,134,0.78)); box-shadow: 0 0 0 1px rgba(140,195,250,0.4), 0 3px 14px rgba(6,18,42,0.5), inset 0 1px 0 rgba(140,195,250,0.3); }',
    ].join('\n')

    const SIDEBAR_CSS = [
      ':root { --ocean-ice-glass: rgba(246, 251, 255, 0.6); --ocean-ice-panel: rgba(244, 250, 255, 0.82); --ocean-blue-line: rgba(120, 170, 225, 0.5); --ocean-blue-line-soft: rgba(120, 170, 225, 0.32); --ocean-gold: #c8a76a; --ocean-gold-soft: rgba(200, 167, 106, 0.5); --ocean-gold-faint: rgba(200, 167, 106, 0.28); --ocean-text: #16335e; --ocean-text-soft: #52749e; --ocean-hover: rgba(190, 220, 246, 0.5); --ocean-selected: rgba(150, 200, 245, 0.22); --ocean-shadow: 0 8px 24px rgba(40, 80, 140, 0.12); --ocean-shadow-sm: 0 2px 8px rgba(40, 80, 140, 0.08); --ds-new-session-scale: 1; }',
      'body[data-ds-dark-theme] { --dsw-specific-sidebar-fill: rgba(12, 26, 58, 0.88); --ocean-ice-glass: rgba(22, 44, 86, 0.62); --ocean-ice-panel: rgba(27, 54, 104, 0.78); --ocean-blue-line: rgba(110, 170, 230, 0.45); --ocean-blue-line-soft: rgba(110, 170, 230, 0.28); --ocean-gold: #e0bc72; --ocean-gold-soft: rgba(224, 188, 114, 0.55); --ocean-gold-faint: rgba(224, 188, 114, 0.3); --ocean-text: #e6effa; --ocean-text-soft: #a9c4e6; --ocean-hover: rgba(70, 120, 190, 0.32); --ocean-selected: rgba(90, 150, 220, 0.26); }',
      'body[data-ds-dark-theme] .hHd-Xa_root { background: linear-gradient(180deg, rgba(16, 34, 70, 0.96), rgba(24, 48, 94, 0.92)) !important; }',
      'body[data-ds-dark-theme] .hHd-Xa_newSessionLabel { color: #dbe8f8 !important; }',
      '.hHd-Xa_root { background: linear-gradient(180deg, rgba(238, 246, 252, 0.94), rgba(222, 240, 250, 0.9)) !important; color: var(--ocean-text) !important; position: relative; overflow: hidden; }',
      // Bottom cartoon character as a BACKGROUND decoration: direct child of the
      // Every root child except the footer is raised to z-index:1 so it paints
      // above the background sticker (which sits at z-index:0). The footer must
      // be EXCLUDED: the settings modal (position:fixed; z-index:1000) is nested
      // inside .hHd-Xa_footArea, and if that node is a stacking context the
      // modal's z-index is scoped within the footer's z-index:1 — losing to the
      // sidebar drag handle (z-index:2, root context). With the footer at
      // position:relative/z-index:auto it is NOT a stacking context, so the
      // modal's z-index:1000 propagates to the root context and covers the
      // handle (no sidebar resize while the settings dialog is open).
      '.hHd-Xa_root > :not(.uiskin-sidebar-sticker):not(.hHd-Xa_footArea) { position: relative; z-index: 1; }',
      '.hHd-Xa_root > .uiskin-sidebar-sticker { position: absolute; left: 50%; transform: translateX(-50%); bottom: 145px; height: 96px; width: auto; object-fit: contain; z-index: 0; pointer-events: none; }',
      '.hHd-Xa_root.hHd-Xa_collapsed > .uiskin-sidebar-sticker { height: 40px; bottom: 118px; }',
      '.hHd-Xa_logoRow { height: auto; min-height: 60px; margin-bottom: 0; padding: 8px 12px; border-radius: 16px; background: var(--ocean-ice-glass); border: 1px solid var(--ocean-blue-line); box-shadow: var(--ocean-shadow), inset 0 0 0 1px var(--ocean-gold-faint); position: relative; }',
      '.hHd-Xa_logoRow::before, .hHd-Xa_logoRow::after { content: ""; position: absolute; top: 50%; width: 40px; height: 26px; background-image: url("' + FLOURISH + '"); background-size: contain; background-repeat: no-repeat; background-position: center; pointer-events: none; opacity: 0.6; }',
      '.hHd-Xa_logoRow::before { left: 4px; transform: translateY(-50%); }',
      '.hHd-Xa_logoRow::after { right: 4px; transform: translateY(-50%) scaleX(-1); }',
      // The brand wordmark ("DeepSeek HARNESS") is left exactly as the system
      // renders it — no themed HARNESS badge, no mask, no overlay. The color
      // is themed so the wordmark picks up the ocean text color; nudged 3px
      // right of the logo row's padding edge.
      // The wordmark's HARNESS letters use var(--dsw-alias-label-primary-inverted)
      // for their fill; it is undefined on the app, so they render black-on-black
      // (invisible). Defining it here as champagne gold lets the SYSTEM render its
      // own HARNESS letters in gold natively — perfectly aligned, single layer, no
      // overlay. DeepSeek (currentColor) and the chip are untouched.
      '.hHd-Xa_brand { position: relative; color: var(--ocean-text) !important; margin-left: 8px; --dsw-alias-label-primary-inverted: #d9b36a; }',
      '.hHd-Xa_iconButton { box-sizing: border-box; color: var(--ocean-text) !important; border-radius: 50% !important; background: linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(214, 235, 252, 0.62)) !important; border: 1px solid rgba(120, 180, 235, 0.5) !important; box-shadow: 0 2px 8px rgba(60, 120, 190, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(150, 200, 245, 0.22) !important; backdrop-filter: blur(8px) saturate(140%); -webkit-backdrop-filter: blur(8px) saturate(140%); transition: background-color 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease; }',
      '.hHd-Xa_iconButton:hover { background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(226, 242, 254, 0.76)) !important; border-color: rgba(120, 180, 235, 0.72) !important; box-shadow: 0 0 0 1px rgba(150, 205, 250, 0.45), 0 3px 10px rgba(80, 140, 210, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.9) !important; transform: translateY(-1px); }',
      '.hHd-Xa_newSession { position: relative; width: 80%; margin: 0 auto 0; height: auto; aspect-ratio: 2.9 / 1; min-height: 0; background: transparent !important; border: none !important; box-shadow: none !important; padding: 0 !important; border-radius: 0 !important; justify-content: center; align-items: center; gap: 8px; overflow: visible; transition: filter 0.15s ease; }',
      '.hHd-Xa_newSession::before { content: ""; position: absolute; left: 50%; top: 50%; width: 100%; height: 100%; transform: translate(-50%, -50%) scale(var(--ds-new-session-scale, 1)); transform-origin: center; background-image: var(--ds-new-session-skin, none); background-size: contain; background-repeat: no-repeat; background-position: center; pointer-events: none; will-change: transform; }',
      '.hHd-Xa_newSession svg { width: 18px !important; height: 18px !important; flex: none !important; pointer-events: none; }',
      '.hHd-Xa_newSessionLabel { font-size: 14px; font-weight: 600; line-height: 1; color: #173F73 !important; white-space: nowrap !important; max-width: none !important; pointer-events: none; }',
      '.hHd-Xa_newSession:hover { filter: brightness(1.08); }',
      '.hHd-Xa_newSession:focus-visible { outline: 2px solid rgba(90, 145, 205, 0.65); outline-offset: 2px; }',
      '.hHd-Xa_newSession:disabled { opacity: 0.5; }',
      '.qDHVXG_sectionHeader { margin-top: 0 !important; }',
      '.qDHVXG_sectionLabel { color: var(--ocean-text-soft); font-weight: 600; letter-spacing: 0.02em; }',
      '.qDHVXG_iconButton, .qDHVXG_searchButton { color: var(--ocean-text-soft); border-radius: 8px; }',
      '.qDHVXG_iconButton:hover, .qDHVXG_searchButton:hover { background: var(--ocean-hover); color: var(--ocean-text); }',
      '.qDHVXG_iconButton:focus-visible, .qDHVXG_searchButton:focus-visible { outline: 2px solid rgba(90, 145, 205, 0.65); outline-offset: 1px; }',
      '.YDXeBa_projectRow { box-sizing: border-box; height: 36px; margin: 2px 0; border-radius: 12px; background: var(--ocean-ice-panel); border: 1px solid var(--ocean-blue-line-soft); box-shadow: var(--ocean-shadow-sm), inset 0 0 0 1px var(--ocean-gold-faint); padding: 0 10px; color: var(--ocean-text); }',
      '.YDXeBa_projectRow:hover { background: rgba(240, 248, 255, 0.95); border-color: var(--ocean-blue-line); }',
      '.YDXeBa_projectRow .YDXeBa_title { color: var(--ocean-text); font-weight: 600; }',
      '.YDXeBa_sessionRow { box-sizing: border-box; height: 32px; margin: 1px 0; border-radius: 10px; border: 1px solid var(--ocean-gold-faint); box-shadow: var(--ocean-shadow-sm); padding: 0 8px; color: var(--ocean-text); background: transparent; }',
      '.YDXeBa_sessionRow:hover { background: var(--ocean-hover); border-color: var(--ocean-gold-soft); }',
      '.YDXeBa_sessionRow.YDXeBa_selected { background: var(--ocean-selected); border-color: var(--ocean-blue-line); box-shadow: inset 0 0 0 1px var(--ocean-blue-line), inset 0 0 10px rgba(150, 200, 245, 0.3); }',
      '.YDXeBa_sessionRow .YDXeBa_title { color: var(--ocean-text); }',
      '.YDXeBa_sessionRow .YDXeBa_time, .YDXeBa_sessionRow .YDXeBa_meta { color: var(--ocean-text-soft); }',
    ].join('\n')

    const FOOTER_CSS = [
      // The session-list scroll area has a 24px bottom "fade" that blends its
      // content into a SOLID fill color (var(--dsw-specific-sidebar-fill)). Our
      // sidebar root uses a GRADIENT background, so that solid fade endpoint
      // shows a hard edge at the fade's bottom border — the visible "shadow
      // line" above the cartoon. Make any such *_fade element transparent so
      // the root gradient shows through seamlessly. Matches by class-name
      // suffix (class hashes change across DSH versions — qDHVXG_fade,
      // bhn1Oq_fade, etc.).
      '[class$="_fade"] { background: transparent !important; background-image: none !important; }',
      '.qDHVXG_fade { background: transparent !important; background-image: none !important; }',
      '.hHd-Xa_footArea, .hHd-Xa_footerActions, .hHd-Xa_settingsArea { background: transparent; border: none; box-shadow: none; }',
      '.Nqubda_layer { margin: 0; order: 1; }',
      '.hHd-Xa_settingsArea { position: relative; margin-top: 0; padding: 0 0 10px; }',
      '.VOzbGW_trigger { box-sizing: border-box; width: 94%; margin: 0 auto; height: auto; min-height: 0; background: transparent !important; border: none !important; box-shadow: none !important; padding: 0 !important; border-radius: 0 !important; display: block; overflow: visible; transition: filter 0.15s ease, transform 0.1s ease; }',
      '.VOzbGW_trigger:hover { background: transparent !important; filter: brightness(1.08); transform: translateY(-1px); }',
      '.VOzbGW_trigger:active { transform: translateY(0); }',
      '.VOzbGW_trigger:focus-visible { outline: none; }',
    ].join('\n')

    // Keep the theme's injected <style> tags pinned at the END of <head> so
    // their rules always win the cascade. The app injects its own per-plugin
    // <style> tags as chunks load; on a cold first load some arrive AFTER our
    // tags and (equal specificity, no !important) would override the skin —
    // that made the sidebar color and the new-session button flicker between
    // themed and default across refreshes. For <style> tags, style-sheet order
    // follows DOM order, so re-appending ours on every head mutation pins them
    // last. App rules with higher specificity (e.g. .hHd-Xa_collapsed .x) still
    // win where intended.
    function keepThemeCssLast() {
      const observer = new MutationObserver(() => {
        const head = document.head
        const tags = [...head.querySelectorAll('style[data-plugin-css="uiskin-theme"]')]
        if (!tags.length) return
        if (tags.includes(head.lastElementChild)) return
        const fragment = document.createDocumentFragment()
        for (const tag of tags) fragment.appendChild(tag)
        head.appendChild(fragment)
      })
      observer.observe(document.head, { childList: true })
      return () => observer.disconnect()
    }


    // The bottom cartoon character becomes a BACKGROUND decoration of the
    // sidebar: injected as a direct child of the sidebar root, absolutely
    // positioned just above the bottom wave divider, with z-index 0 and
    // pointer-events none so every control stays above it. The root's
    // overflow:hidden clips it to the sidebar bounds; the size (96px wide /
    // 40px collapsed) comes from CSS so it follows the sidebar state.
    function injectSidebarSticker() {
      let img = null;
      function build() {
        const root = document.querySelector('.hHd-Xa_root');
        if (!root || img) return;
        img = document.createElement('img');
        img.className = 'uiskin-sidebar-sticker';
        img.src = STICKER_URI;
        img.alt = '';
        img.draggable = false;
        root.appendChild(img);
      }
      build();
      const observer = new MutationObserver(build);
      observer.observe(document.body, { childList: true, subtree: true });
      return () => { observer.disconnect(); if (img) img.remove(); };
    }

    // Sun: crisp warm-gradient disc with a hairline rim and eight slender
    // rounded rays. No blur halo or stray highlight — keeps it glint-free and
    // sharp at icon size. Colored via gradient defs so it reads on any glass.
    function SunIcon() {
      return React.createElement('svg', {
        viewBox: '0 0 24 24', width: '17', height: '17', fill: 'none',
        'aria-hidden': 'true',
      },
        React.createElement('defs', null,
          React.createElement('radialGradient', { id: 'uiskin-sun-core', cx: '42%', cy: '38%', r: '70%' },
            React.createElement('stop', { offset: '0%', stopColor: '#fffbe6' }),
            React.createElement('stop', { offset: '35%', stopColor: '#ffdf7e' }),
            React.createElement('stop', { offset: '88%', stopColor: '#ffc04d' }),
            React.createElement('stop', { offset: '100%', stopColor: '#ffab3d' }),
          ),
        ),
        // rays
        React.createElement('g', { stroke: '#ffb84d', strokeWidth: '1.6', strokeLinecap: 'round' },
          React.createElement('line', { x1: '12', y1: '1.6', x2: '12', y2: '4.4' }),
          React.createElement('line', { x1: '12', y1: '19.6', x2: '12', y2: '22.4' }),
          React.createElement('line', { x1: '1.6', y1: '12', x2: '4.4', y2: '12' }),
          React.createElement('line', { x1: '19.6', y1: '12', x2: '22.4', y2: '12' }),
          React.createElement('line', { x1: '4.64', y1: '4.64', x2: '6.64', y2: '6.64' }),
          React.createElement('line', { x1: '17.36', y1: '17.36', x2: '19.36', y2: '19.36' }),
          React.createElement('line', { x1: '4.64', y1: '19.36', x2: '6.64', y2: '17.36' }),
          React.createElement('line', { x1: '17.36', y1: '6.64', x2: '19.36', y2: '4.64' }),
        ),
        // disc + hairline rim
        React.createElement('circle', { cx: '12', cy: '12', r: '4.9', fill: 'url(#uiskin-sun-core)' }),
        React.createElement('circle', { cx: '12', cy: '12', r: '4.9', fill: 'none', stroke: '#ffcf70', strokeWidth: '0.8' })
      )
    }

    // Moon: cool gradient crescent with a soft glow and a tiny golden sparkle.
    function MoonIcon() {
      return React.createElement('svg', {
        viewBox: '0 0 24 24', width: '17', height: '17', fill: 'none',
        'aria-hidden': 'true',
      },
        React.createElement('defs', null,
          React.createElement('linearGradient', { id: 'uiskin-moon-fill', x1: '0', y1: '0', x2: '0.2', y2: '1' },
            React.createElement('stop', { offset: '0%', stopColor: '#ffffff' }),
            React.createElement('stop', { offset: '50%', stopColor: '#bcd7f7' }),
            React.createElement('stop', { offset: '100%', stopColor: '#7ba6e0' }),
          ),
          React.createElement('radialGradient', { id: 'uiskin-star', cx: '35%', cy: '30%', r: '75%' },
            React.createElement('stop', { offset: '0%', stopColor: '#fff8d9' }),
            React.createElement('stop', { offset: '100%', stopColor: '#ffc857' }),
          ),
          React.createElement('filter', { id: 'uiskin-moon-glow', x: '-70%', y: '-70%', width: '240%', height: '240%' },
            React.createElement('feGaussianBlur', { stdDeviation: '1.3' }),
          ),
        ),
        // soft halo
        React.createElement('path', { d: 'M20.6 13.9 A9.2 9.2 0 1 1 10.1 3.4 A7.6 7.6 0 0 0 20.6 13.9 Z', fill: 'url(#uiskin-moon-fill)', opacity: '0.3', filter: 'url(#uiskin-moon-glow)' }),
        // crescent
        React.createElement('path', { d: 'M20.6 13.9 A9.2 9.2 0 1 1 10.1 3.4 A7.6 7.6 0 0 0 20.6 13.9 Z', fill: 'url(#uiskin-moon-fill)' }),
        // golden sparkle
        React.createElement('path', { d: 'M16.9 8.3 C17 9.3 17.4 9.7 18.4 9.8 C17.4 9.9 17 10.3 16.9 11.3 C16.8 10.3 16.4 9.9 15.4 9.8 C16.4 9.7 16.8 9.3 16.9 8.3 Z', fill: 'url(#uiskin-star)' })
      )
    }

    function apply(ctx) {
      ctx.effect(() => {
        const disposers = []
        const theme = ctx.theme
        if (theme !== undefined) {
          disposers.push(theme.overrideTokens('blue-glass-theme', TOKENS))
        }
        disposers.push(keepThemeCssLast())
        disposers.push(injectSidebarSticker())
        disposers.push(insertStyle(BASE_CSS))
        disposers.push(insertStyle(OCEAN_CSS))
        disposers.push(insertStyle(COMPOSER_CSS))
        disposers.push(insertStyle(PERMISSION_CSS))
        disposers.push(insertStyle(MODEL_CSS))
        disposers.push(insertStyle(SIDEBAR_CSS))
        disposers.push(insertStyle(FOOTER_CSS))
        disposers.push(insertStyle(THEME_TOGGLE_CSS))
        return () => { for (let i = 0; i < disposers.length; i++) disposers[i]() }
      })

      ctx.effect(() => {
        const disposers = []
        disposers.push(insertStyle(':root { --ds-theme-bg-image: url("' + BG_URI + '"); }'))
        disposers.push(insertStyle(':root { --ds-new-session-skin: url("' + NEW_SESSION_SKIN_URI + '"); }'))
        return () => { for (let i = 0; i < disposers.length; i++) disposers[i]() }
      })

      function SettingsWhaleButton(props) {
        return React.createElement('img', {
          src: SETTINGS_DECOR_URI,
          alt: '设置',
          role: 'img',
          draggable: false,
          style: {
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
          },
        })
      }

      function SidebarDivider(props) {
        return React.createElement('div', {
          style: { flexBasis: '100%', order: 0, display: 'flex', justifyContent: 'center', padding: '2px 6px 0', background: 'transparent', pointerEvents: 'none' },
        }, React.createElement('img', {
          src: SETTINGS_DIVIDER_URI,
          alt: '',
          draggable: false,
          style: { width: '100%', height: 44, objectFit: 'cover', display: 'block' },
        }))
      }

      // Light/dark theme toggle placed to the LEFT of the Session log button in
      // the conversation header utility group. Reads the resolved color scheme
      // from ctx.theme on first render, subscribes to `theme/change` so the
      // icon flips live, and calls ctx.theme.setTheme() to persist the choice to
      // the app's own user-settings scope (survives reload). setTheme() is the
      // only sanctioned write path; the ui-layout presenter applies/removes the
      // body data-ds-dark-theme attribute from the emitted snapshot.
      function ThemeToggle(props) {
        const theme = ctx.theme
        const [dark, setDark] = React.useState(() => {
          if (theme === undefined) return document.body.hasAttribute('data-ds-dark-theme')
          return theme.getTheme().active.colorScheme === 'dark'
        })
        React.useEffect(() => {
          if (theme === undefined) return
          const off = ctx.on('theme/change', (snapshot) => {
            setDark(snapshot.active.colorScheme === 'dark')
          })
          return off
        }, [])
        const toggle = () => {
          if (theme === undefined) {
            // Fallback: flip the body attribute the presenter would own.
            const next = !document.body.hasAttribute('data-ds-dark-theme')
            if (next) document.body.setAttribute('data-ds-dark-theme', '')
            else document.body.removeAttribute('data-ds-dark-theme')
            setDark(next)
            return
          }
          const nextDark = theme.getTheme().active.colorScheme !== 'dark'
          theme.setTheme(nextDark ? 'dark' : 'light')
        }
        return React.createElement('button', {
          type: 'button',
          className: 'uiskin-theme-toggle',
          'aria-label': dark ? '切换到浅色' : '切换到深色',
          title: dark ? '切换到浅色' : '切换到深色',
          'data-uiskin-dark': dark ? 'true' : 'false',
          onClick: toggle,
        }, dark ? React.createElement(MoonIcon) : React.createElement(SunIcon))
      }

      const slots = ctx.slots
      if (slots !== undefined) {
        // settings.trigger is a SINGLE slot also claimed by the built-in
        // settings-general trigger at priority 0. Shadow it with a negative
        // priority (lowest renders) — the dynamic runner did the same by
        // allocating a unique descending priority per registration.
        slots.inject('settings.trigger', () => slots.register(
          { name: 'settings.trigger', priority: -100 },
          (props) => React.createElement(SettingsWhaleButton, props),
        ))
        slots.inject('sidebar.footer.action', () => slots.register(
          { name: 'sidebar.footer.action', id: 'theme-divider', order: 0, label: '' },
          (props) => React.createElement(SidebarDivider, props),
        ))
        // Light/dark toggle, placed LEFT of the Session log button: both live in
        // the 'conversation.session.header.utilities' list, which sorts ascending
        // by `order` (session-log-download has no order → 0), so order:-1 puts us
        // first (leftmost).
        slots.inject('conversation.session.header.utilities', () => slots.register(
          { name: 'conversation.session.header.utilities', id: 'theme-dark-toggle', order: -1, label: '主题切换' },
          (props) => React.createElement(ThemeToggle, props),
        ))
      }
    }

    const inject = ["theme", "slots"];

    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  }
});
