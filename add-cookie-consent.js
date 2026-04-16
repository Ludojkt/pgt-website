const fs = require('fs');
let html = fs.readFileSync('pgt_website.html', 'utf8');
const EOL = html.includes('\r\n') ? '\r\n' : '\n';

// ── 1. CDN CSS link in <head> ─────────────────────────────────────────────────
html = html.replace(
  '</head>',
  '  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/dist/cookieconsent.css">\n</head>'
);

// ── 2. PGT theme CSS overrides ────────────────────────────────────────────────
const ccCSS = `
/* ── Cookie Consent – PGT Theme ───────────────────────────────── */
#cc-main {
  --cc-font-family: 'Inter', system-ui, sans-serif;
  --cc-modal-border-radius: 12px;
  --cc-btn-border-radius: 6px;
  --cc-bg: #ffffff;
  --cc-primary-color: #0A1E3D;
  --cc-secondary-color: #475569;
  --cc-separator-border-color: #e2e8f0;
  --cc-footer-border-color: #e2e8f0;
  --cc-cookie-category-block-bg: #f8fafc;
  --cc-cookie-category-block-border: 1px solid #e2e8f0;
  --cc-cookie-category-block-hover-bg: #f0f9ff;
  --cc-overlay-bg: rgba(10,30,61,.55);
  /* Primary = Accept all = teal */
  --cc-btn-primary-bg: #0097A7;
  --cc-btn-primary-color: #fff;
  --cc-btn-primary-border-color: #0097A7;
  --cc-btn-primary-hover-bg: #00838f;
  --cc-btn-primary-hover-color: #fff;
  --cc-btn-primary-hover-border-color: #00838f;
  /* Secondary = Essential only = navy outline */
  --cc-btn-secondary-bg: #fff;
  --cc-btn-secondary-color: #0A1E3D;
  --cc-btn-secondary-border-color: #cbd5e1;
  --cc-btn-secondary-hover-bg: #f1f5f9;
  --cc-btn-secondary-hover-color: #0A1E3D;
  --cc-btn-secondary-hover-border-color: #94a3b8;
  /* Toggles */
  --cc-toggle-on-bg: #0097A7;
  --cc-toggle-off-bg: #cbd5e1;
  --cc-toggle-on-knob-bg: #fff;
  --cc-toggle-off-knob-bg: #fff;
  --cc-toggle-readonly-bg: #e2e8f0;
}
#cc-main .cm__title { font-size: 16px; font-weight: 700; }
#cc-main .cm { box-shadow: 0 20px 60px rgba(10,30,61,.18); }
#cc-main .pm { box-shadow: 0 20px 60px rgba(10,30,61,.22); }
#cc-main a.cc-link { color: #0097A7; text-decoration: underline; }
`;

// Insert inside the existing <style> block (before its closing tag)
html = html.replace(
  /(<\/style>)(\s*<\/head>)/,
  ccCSS + '$1$2'
);
console.log('CSS added');

// ── 3. Cookie Settings link in footer ────────────────────────────────────────
const ccFooterLink = `      <a id="cc-settings-link" href="javascript:void(0)" onclick="if(window.CookieConsent)CookieConsent.showPreferences()" style="color:rgba(255,255,255,.4);font-size:12px;text-decoration:none;transition:color .3s;cursor:pointer;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='rgba(255,255,255,.4)'">Cookie Settings</a>`;

html = html.replace(
  /(Terms &amp; Conditions<\/a>)(\s*<\/div>\s*<\/div>\s*<\/footer>)/,
  '$1\n' + ccFooterLink + '$2'
);
console.log('Footer link added:', html.includes('cc-settings-link'));

// ── 4. Add Cookie Settings translation to translations object ─────────────────
const ccLinkTranslation = `  '#cc-settings-link': { en:'Cookie Settings', id:'Pengaturan Kuki', zh:'Cookie 设置' },\n`;
html = html.replace(
  "'.footer-bottom span:first-child':",
  ccLinkTranslation + "  '.footer-bottom span:first-child':"
);
console.log('Translation added');

// ── 5. Hook language update into setLangFlat ──────────────────────────────────
html = html.replace(
  'if (window.applyLegalContent) applyLegalContent(lang);',
  'if (window.applyLegalContent) applyLegalContent(lang);\n  if (window.CookieConsent) CookieConsent.setLanguage(lang);'
);
console.log('setLangFlat hooked');

// ── 6. CC JS + initialisation before </body> ──────────────────────────────────
const ccScript = `
<script src="https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/dist/cookieconsent.umd.js"></script>
<script>
(function() {
  if (!window.CookieConsent) return;

  CookieConsent.run({

    guiOptions: {
      consentModal: {
        layout: 'box',
        position: 'bottom right',
        equalWeightButtons: false,
        flipButtons: false
      },
      preferencesModal: {
        layout: 'box',
        equalWeightButtons: true,
        flipButtons: false
      }
    },

    categories: {
      necessary: {
        enabled: true,
        readOnly: true
      },
      analytics: {
        autoClear: {
          cookies: [
            { name: /^_ga/ },
            { name: '_gid' },
            { name: '_gat' }
          ]
        }
      }
    },

    language: {
      default: 'en',
      autoDetect: false,

      translations: {

        // ── English ──────────────────────────────────────────────────────────
        en: {
          consentModal: {
            title: '🍪 We use cookies',
            description: 'PT Patimban Global Gateway Terminal uses essential cookies to keep the website working correctly, and optional anonymised analytics cookies to understand how visitors use our site. No advertising or cross-site tracking cookies are used.',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Essential only',
            showPreferencesBtn: 'Manage preferences',
            footer: '<a href="javascript:void(0)" onclick="navigateTo(\'privacy\')">Privacy Policy</a> · <a href="javascript:void(0)" onclick="navigateTo(\'terms\')">Terms &amp; Conditions</a>'
          },
          preferencesModal: {
            title: 'Cookie Preferences',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Essential only',
            savePreferencesBtn: 'Save preferences',
            closeIconLabel: 'Close modal',
            serviceCounterLabel: 'Service|Services',
            sections: [
              {
                title: 'How we use cookies',
                description: 'We use cookies to ensure the website works correctly and, with your consent, to understand how visitors interact with our content. You can review and change your preferences at any time by clicking "Cookie Settings" in the footer.'
              },
              {
                title: 'Essential Cookies <span class="pm__badge">Always on</span>',
                description: 'These cookies are strictly necessary for the website to function. They store your language preference and your cookie consent choice. They cannot be disabled.',
                linkedCategory: 'necessary',
                cookieTable: {
                  caption: 'Cookie list',
                  headers: { name: 'Cookie', domain: 'Domain', desc: 'Description', duration: 'Duration' },
                  body: [
                    { name: 'cc_cookie', domain: 'pgt.id', desc: 'Stores your cookie consent preferences', duration: '6 months' },
                    { name: 'lang_pref', domain: 'pgt.id', desc: 'Remembers your language choice', duration: 'Session' }
                  ]
                }
              },
              {
                title: 'Analytics Cookies',
                description: 'These optional cookies let us count visits and understand how visitors move around the website. All data is fully anonymised — no personal information is linked or stored.',
                linkedCategory: 'analytics',
                cookieTable: {
                  caption: 'Cookie list',
                  headers: { name: 'Cookie', domain: 'Domain', desc: 'Description', duration: 'Duration' },
                  body: [
                    { name: '_ga, _gid', domain: 'pgt.id', desc: 'Google Analytics — anonymised usage statistics', duration: 'Up to 13 months' }
                  ]
                }
              },
              {
                title: 'More information',
                description: 'For full details on how PGT processes personal data and uses cookies, please read our <a href="javascript:void(0)" onclick="navigateTo(\'privacy\')" class="cc-link">Privacy Policy</a>. For questions contact <a href="mailto:info@pgt.id" class="cc-link">info@pgt.id</a>.'
              }
            ]
          }
        },

        // ── Indonesian ───────────────────────────────────────────────────────
        id: {
          consentModal: {
            title: '🍪 Kami menggunakan kuki',
            description: 'PT Patimban Global Gateway Terminal menggunakan kuki esensial agar website berfungsi dengan baik, serta kuki analitik opsional yang dianonimkan untuk memahami cara pengunjung menggunakan situs kami. Tidak ada kuki iklan atau pelacak lintas situs yang digunakan.',
            acceptAllBtn: 'Terima semua',
            acceptNecessaryBtn: 'Hanya esensial',
            showPreferencesBtn: 'Kelola preferensi',
            footer: '<a href="javascript:void(0)" onclick="navigateTo(\'privacy\')">Kebijakan Privasi</a> · <a href="javascript:void(0)" onclick="navigateTo(\'terms\')">Syarat &amp; Ketentuan</a>'
          },
          preferencesModal: {
            title: 'Preferensi Kuki',
            acceptAllBtn: 'Terima semua',
            acceptNecessaryBtn: 'Hanya esensial',
            savePreferencesBtn: 'Simpan preferensi',
            closeIconLabel: 'Tutup',
            serviceCounterLabel: 'Layanan',
            sections: [
              {
                title: 'Cara kami menggunakan kuki',
                description: 'Kami menggunakan kuki untuk memastikan website berfungsi dengan benar dan, dengan persetujuan Anda, untuk memahami cara pengunjung berinteraksi dengan konten kami. Anda dapat meninjau dan mengubah preferensi kapan saja melalui tombol "Pengaturan Kuki" di footer.'
              },
              {
                title: 'Kuki Esensial <span class="pm__badge">Selalu aktif</span>',
                description: 'Kuki ini mutlak diperlukan agar website dapat berfungsi. Kuki ini menyimpan preferensi bahasa dan pilihan persetujuan kuki Anda. Kuki ini tidak dapat dinonaktifkan.',
                linkedCategory: 'necessary',
                cookieTable: {
                  caption: 'Daftar kuki',
                  headers: { name: 'Kuki', domain: 'Domain', desc: 'Deskripsi', duration: 'Durasi' },
                  body: [
                    { name: 'cc_cookie', domain: 'pgt.id', desc: 'Menyimpan preferensi persetujuan kuki Anda', duration: '6 bulan' },
                    { name: 'lang_pref', domain: 'pgt.id', desc: 'Mengingat pilihan bahasa Anda', duration: 'Sesi' }
                  ]
                }
              },
              {
                title: 'Kuki Analitik',
                description: 'Kuki opsional ini memungkinkan kami menghitung kunjungan dan memahami cara pengunjung menjelajahi website. Semua data sepenuhnya dianonimkan — tidak ada informasi pribadi yang dikaitkan atau disimpan.',
                linkedCategory: 'analytics',
                cookieTable: {
                  caption: 'Daftar kuki',
                  headers: { name: 'Kuki', domain: 'Domain', desc: 'Deskripsi', duration: 'Durasi' },
                  body: [
                    { name: '_ga, _gid', domain: 'pgt.id', desc: 'Google Analytics — statistik penggunaan yang dianonimkan', duration: 'Hingga 13 bulan' }
                  ]
                }
              },
              {
                title: 'Informasi lebih lanjut',
                description: 'Untuk detail lengkap tentang bagaimana PGT memproses data pribadi dan menggunakan kuki, silakan baca <a href="javascript:void(0)" onclick="navigateTo(\'privacy\')" class="cc-link">Kebijakan Privasi</a> kami. Untuk pertanyaan hubungi <a href="mailto:info@pgt.id" class="cc-link">info@pgt.id</a>.'
              }
            ]
          }
        },

        // ── Chinese ──────────────────────────────────────────────────────────
        zh: {
          consentModal: {
            title: '🍪 我们使用Cookie',
            description: 'PT Patimban Global Gateway Terminal使用必要的Cookie确保网站正常运行，以及可选的匿名分析Cookie了解访问者如何使用我们的网站。我们不使用广告Cookie或跨网站跟踪Cookie。',
            acceptAllBtn: '接受全部',
            acceptNecessaryBtn: '仅必要项',
            showPreferencesBtn: '管理偏好设置',
            footer: '<a href="javascript:void(0)" onclick="navigateTo(\'privacy\')">隐私政策</a> · <a href="javascript:void(0)" onclick="navigateTo(\'terms\')">使用条款</a>'
          },
          preferencesModal: {
            title: 'Cookie偏好设置',
            acceptAllBtn: '接受全部',
            acceptNecessaryBtn: '仅必要项',
            savePreferencesBtn: '保存偏好',
            closeIconLabel: '关闭',
            serviceCounterLabel: '服务',
            sections: [
              {
                title: '我们如何使用Cookie',
                description: '我们使用Cookie确保网站正常运行，并在您同意的情况下了解访问者如何与我们的内容互动。您可以随时通过页脚中的"Cookie设置"按钮查看和更改您的偏好设置。'
              },
              {
                title: '必要Cookie <span class="pm__badge">始终启用</span>',
                description: '这些Cookie是网站正常运行所必需的。它们存储您的语言偏好和Cookie同意选择，无法禁用。',
                linkedCategory: 'necessary',
                cookieTable: {
                  caption: 'Cookie列表',
                  headers: { name: 'Cookie名称', domain: '域名', desc: '说明', duration: '有效期' },
                  body: [
                    { name: 'cc_cookie', domain: 'pgt.id', desc: '存储您的Cookie同意偏好设置', duration: '6个月' },
                    { name: 'lang_pref', domain: 'pgt.id', desc: '记住您的语言选择', duration: '会话' }
                  ]
                }
              },
              {
                title: '分析Cookie',
                description: '这些可选Cookie允许我们统计访问量并了解访问者如何浏览网站。所有数据均已完全匿名处理——不会关联或存储任何个人信息。',
                linkedCategory: 'analytics',
                cookieTable: {
                  caption: 'Cookie列表',
                  headers: { name: 'Cookie名称', domain: '域名', desc: '说明', duration: '有效期' },
                  body: [
                    { name: '_ga, _gid', domain: 'pgt.id', desc: 'Google Analytics — 匿名使用统计数据', duration: '最长13个月' }
                  ]
                }
              },
              {
                title: '更多信息',
                description: '有关PGT如何处理个人数据和使用Cookie的完整详情，请阅读我们的<a href="javascript:void(0)" onclick="navigateTo(\'privacy\')" class="cc-link">隐私政策</a>。如有疑问请联系<a href="mailto:info@pgt.id" class="cc-link">info@pgt.id</a>。'
              }
            ]
          }
        }

      }
    }
  });

})();
</script>
`;

html = html.replace('</body>', ccScript + '\n</body>');
console.log('CC script injected');

fs.writeFileSync('pgt_website.html', html);
console.log('Done. File size:', fs.statSync('pgt_website.html').size);
