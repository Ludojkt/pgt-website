const fs = require('fs');
let html = fs.readFileSync('pgt_website.html', 'utf8');

// ── 1. ADD IDs TO CONTENT CONTAINERS ─────────────────────────────────────────
html = html.replace(
  /<div class="page" id="page-privacy">[\s\S]*?<div class="container" style="max-width:860px;">/,
  (match) => match.replace('<div class="container" style="max-width:860px;">', '<div id="priv-main-content" class="container" style="max-width:860px;">')
);
html = html.replace(
  /<div class="page" id="page-terms">[\s\S]*?<div class="container" style="max-width:860px;">/,
  (match) => match.replace('<div class="container" style="max-width:860px;">', '<div id="tc-main-content" class="container" style="max-width:860px;">')
);
console.log('IDs added:', html.includes('id="priv-main-content"') && html.includes('id="tc-main-content"'));

// ── 2. ADD HERO TRANSLATIONS TO TRANSLATIONS OBJECT ──────────────────────────
const heroTranslations = `
  // ── Privacy Policy Page ──
  '#page-privacy .page-hero-tag': { en:'Legal', id:'Hukum', zh:'法律' },
  '#page-privacy h1': { en:'Privacy Policy', id:'Kebijakan Privasi', zh:'隐私政策' },
  '#page-privacy .page-hero p:nth-of-type(1)': {
    en:'How PT Patimban Global Gateway Terminal collects, uses, and protects your personal data — in compliance with Indonesian Personal Data Protection Law (UU PDP No. 27/2022) and the EU General Data Protection Regulation (GDPR).',
    id:'Cara PT Patimban Global Gateway Terminal mengumpulkan, menggunakan, dan melindungi data pribadi Anda — sesuai dengan Undang-Undang Pelindungan Data Pribadi Indonesia (UU PDP No. 27/2022) dan Peraturan Perlindungan Data Umum Eropa (GDPR).',
    zh:'PT Patimban Global Gateway Terminal收集、使用和保护您个人数据的方式——遵守印度尼西亚《个人数据保护法》（UU PDP第27/2022号）及欧盟《通用数据保护条例》（GDPR）。'
  },
  '#page-privacy .page-hero p:nth-of-type(2)': {
    en:'Last updated: April 2025 &nbsp;|&nbsp; Effective date: April 2025',
    id:'Terakhir diperbarui: April 2025 &nbsp;|&nbsp; Berlaku sejak: April 2025',
    zh:'最后更新：2025年4月 &nbsp;|&nbsp; 生效日期：2025年4月'
  },
  // ── Terms & Conditions Page ──
  '#page-terms .page-hero-tag': { en:'Legal', id:'Hukum', zh:'法律' },
  '#page-terms h1': { en:'Terms &amp; Conditions of Use', id:'Syarat &amp; Ketentuan Penggunaan', zh:'使用条款与条件' },
  '#page-terms .page-hero p:nth-of-type(1)': {
    en:'Please read these Terms carefully before using the PGT website. By accessing or using this website you agree to be bound by these Terms.',
    id:'Harap baca Syarat-syarat ini dengan saksama sebelum menggunakan website PGT. Dengan mengakses atau menggunakan website ini, Anda setuju untuk terikat oleh Syarat-syarat ini.',
    zh:'请在使用PGT网站之前仔细阅读本条款。访问或使用本网站即表示您同意受本条款约束。'
  },
  '#page-terms .page-hero p:nth-of-type(2)': {
    en:'Last updated: April 2025 &nbsp;|&nbsp; Effective date: April 2025',
    id:'Terakhir diperbarui: April 2025 &nbsp;|&nbsp; Berlaku sejak: April 2025',
    zh:'最后更新：2025年4月 &nbsp;|&nbsp; 生效日期：2025年4月'
  },
`;

// Insert before the closing of translations object (find last entry before };)
const transEnd = html.lastIndexOf('};', html.indexOf('// ─── SPA NAVIGATION'));
html = html.substring(0, transEnd) + heroTranslations + '\n' + html.substring(transEnd);
console.log('Hero translations added');

// ── 3. BUILD INDONESIAN BODY CONTENT ─────────────────────────────────────────
const privBodyID = `
      <div class="privacy-toc reveal" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:28px 32px;margin-bottom:48px;">
        <h3 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--teal);margin-bottom:16px;">Daftar Isi</h3>
        <ol style="columns:2;gap:32px;margin:0;padding-left:20px;font-size:14px;color:var(--navy);">
          <li><a href="#priv-who" style="color:var(--navy);text-decoration:none;">Pengendali Data</a></li>
          <li><a href="#priv-dpo" style="color:var(--navy);text-decoration:none;">Petugas Pelindungan Data</a></li>
          <li><a href="#priv-data" style="color:var(--navy);text-decoration:none;">Data yang Kami Kumpulkan</a></li>
          <li><a href="#priv-purpose" style="color:var(--navy);text-decoration:none;">Tujuan Pemrosesan &amp; Dasar Hukum</a></li>
          <li><a href="#priv-share" style="color:var(--navy);text-decoration:none;">Penerima Data</a></li>
          <li><a href="#priv-transfer" style="color:var(--navy);text-decoration:none;">Transfer Internasional</a></li>
          <li><a href="#priv-retention" style="color:var(--navy);text-decoration:none;">Periode Retensi</a></li>
          <li><a href="#priv-security" style="color:var(--navy);text-decoration:none;">Keamanan &amp; Hosting</a></li>
          <li><a href="#priv-cookies" style="color:var(--navy);text-decoration:none;">Kuki &amp; Pelacak</a></li>
          <li><a href="#priv-rights" style="color:var(--navy);text-decoration:none;">Hak-Hak Anda</a></li>
          <li><a href="#priv-contact" style="color:var(--navy);text-decoration:none;">Pelaksanaan Hak &amp; Kontak</a></li>
          <li><a href="#priv-changes" style="color:var(--navy);text-decoration:none;">Perubahan Kebijakan</a></li>
        </ol>
      </div>
      <div class="privacy-section reveal" style="background:#f0f9ff;border-left:4px solid var(--teal);padding:20px 24px;border-radius:0 10px 10px 0;margin-bottom:48px;">
        <p style="margin:0;font-size:14px;line-height:1.8;">PT Patimban Global Gateway Terminal berkomitmen untuk melindungi data pribadi Anda dan menghormati privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, berbagi, dan menyimpan data pribadi sesuai dengan <strong>Undang-Undang No. 27/2022 tentang Pelindungan Data Pribadi (UU PDP)</strong> Indonesia dan, jika berlaku, <strong>Peraturan Perlindungan Data Umum Eropa (GDPR, Regulasi 2016/679)</strong>.</p>
      </div>
      <div id="priv-who" class="privacy-section reveal">
        <h2 class="privacy-heading">1. Pengendali Data</h2>
        <p>Pengendali data yang bertanggung jawab atas data pribadi Anda adalah:</p>
        <div class="privacy-info-box">
          <div class="privacy-info-row"><span class="privacy-info-label">Nama hukum</span><span>PT Patimban Global Gateway Terminal</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Alamat terdaftar</span><span>Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Jakarta Pusat, Jakarta 10270, Indonesia</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Email</span><span><a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a></span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Website</span><span>https://pgt.id</span></div>
        </div>
        <p>PGT bertindak sebagai <strong>pengendali data</strong> dalam pengertian Pasal 4(7) GDPR dan Pasal 1(4) UU PDP untuk semua data pribadi yang diproses melalui website ini dan sehubungan dengan kegiatan operasional dan komersial kami.</p>
      </div>
      <div id="priv-dpo" class="privacy-section reveal">
        <h2 class="privacy-heading">2. Petugas Pelindungan Data (PPD)</h2>
        <p>PGT telah menunjuk Petugas Pelindungan Data (PPD) yang bertanggung jawab mengawasi kepatuhan terhadap undang-undang perlindungan data yang berlaku. Anda dapat menghubungi PPD secara langsung untuk pertanyaan terkait privasi atau untuk menggunakan hak-hak Anda:</p>
        <div class="privacy-info-box">
          <div class="privacy-info-row"><span class="privacy-info-label">Jabatan</span><span>Petugas Pelindungan Data, PT Patimban Global Gateway Terminal</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Email</span><span><a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a></span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Alamat</span><span>Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Jakarta Pusat, Jakarta 10270, Indonesia</span></div>
        </div>
      </div>
      <div id="priv-data" class="privacy-section reveal">
        <h2 class="privacy-heading">3. Data Pribadi yang Kami Kumpulkan</h2>
        <p>Kami hanya mengumpulkan data yang memadai, relevan, dan terbatas pada apa yang diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini. Ini mencakup kategori berikut:</p>
        <h3 class="privacy-subheading">a) Identifikasi &amp; data kontak</h3>
        <table class="privacy-table"><thead><tr><th>Data</th><th>Sumber</th></tr></thead><tbody>
          <tr><td>Nama depan, nama belakang</td><td>Formulir kontak, korespondensi bisnis</td></tr>
          <tr><td>Nama perusahaan / organisasi</td><td>Formulir kontak, korespondensi bisnis</td></tr>
          <tr><td>Alamat email profesional</td><td>Formulir kontak, korespondensi bisnis</td></tr>
          <tr><td>Nomor telepon</td><td>Formulir kontak, korespondensi bisnis</td></tr>
          <tr><td>Jabatan / peran profesional</td><td>Korespondensi bisnis, pertemuan</td></tr>
        </tbody></table>
        <h3 class="privacy-subheading">b) Informasi profesional &amp; operasional</h3>
        <table class="privacy-table"><thead><tr><th>Data</th><th>Sumber</th></tr></thead><tbody>
          <tr><td>Detail tata kelola perusahaan (untuk onboarding kontrak)</td><td>Dokumen pendaftaran bisnis</td></tr>
          <tr><td>Negara asal dan tujuan kargo / pengiriman</td><td>Komunikasi operasional</td></tr>
          <tr><td>Volume dan jenis kargo (jika relevan dengan penawaran)</td><td>Permintaan penawaran harga</td></tr>
          <tr><td>Subjek dan isi pertanyaan</td><td>Formulir kontak</td></tr>
        </tbody></table>
        <h3 class="privacy-subheading">c) Data yang dikumpulkan secara otomatis</h3>
        <table class="privacy-table"><thead><tr><th>Data</th><th>Sumber</th></tr></thead><tbody>
          <tr><td>Alamat IP (dianonimkan jika memungkinkan)</td><td>Log server</td></tr>
          <tr><td>Jenis browser, jenis perangkat, sistem operasi</td><td>Log server</td></tr>
          <tr><td>Halaman yang dikunjungi, waktu yang dihabiskan, URL perujuk</td><td>Analitik (dianonimkan)</td></tr>
        </tbody></table>
        <p style="font-size:13px;color:#64748b;margin-top:8px;">Kami tidak mengumpulkan kategori data pribadi yang sensitif melalui website ini.</p>
      </div>
      <div id="priv-purpose" class="privacy-section reveal">
        <h2 class="privacy-heading">4. Tujuan Pemrosesan &amp; Dasar Hukum</h2>
        <p>Kami memproses data pribadi Anda untuk tujuan-tujuan berikut, masing-masing didukung oleh dasar hukum berdasarkan GDPR dan UU PDP:</p>
        <table class="privacy-table"><thead><tr><th>Tujuan</th><th>Data yang digunakan</th><th>Dasar hukum (GDPR)</th><th>Dasar hukum (UU PDP)</th></tr></thead><tbody>
          <tr><td>Menanggapi formulir kontak</td><td>Nama, perusahaan, email, telepon, pesan</td><td>Persetujuan — Pasal 6(1)(a)</td><td>Persetujuan — Pasal 20(1)</td></tr>
          <tr><td>Menangani permintaan penawaran harga</td><td>Nama, perusahaan, detail operasional</td><td>Langkah pra-kontrak — Pasal 6(1)(b)</td><td>Kontrak — Pasal 20(2)(b)</td></tr>
          <tr><td>Tindak lanjut komersial &amp; pengembangan bisnis</td><td>Nama, perusahaan, email, telepon</td><td>Kepentingan yang sah — Pasal 6(1)(f)</td><td>Kepentingan yang sah — Pasal 20(2)(f)</td></tr>
          <tr><td>Mengirim informasi yang diminta</td><td>Nama, email</td><td>Persetujuan — Pasal 6(1)(a)</td><td>Persetujuan — Pasal 20(1)</td></tr>
          <tr><td>Komunikasi email (non-pemasaran)</td><td>Nama, email</td><td>Kepentingan yang sah — Pasal 6(1)(f)</td><td>Kepentingan yang sah — Pasal 20(2)(f)</td></tr>
          <tr><td>Meningkatkan performa website</td><td>Data penggunaan dianonimkan</td><td>Kepentingan yang sah — Pasal 6(1)(f)</td><td>Kepentingan yang sah — Pasal 20(2)(f)</td></tr>
          <tr><td>Pencegahan penipuan &amp; keamanan website</td><td>Alamat IP, data teknis</td><td>Kepentingan yang sah — Pasal 6(1)(f)</td><td>Kepentingan yang sah — Pasal 20(2)(f)</td></tr>
          <tr><td>Kepatuhan terhadap kewajiban hukum</td><td>Sesuai dengan hukum yang berlaku</td><td>Kewajiban hukum — Pasal 6(1)(c)</td><td>Kewajiban hukum — Pasal 20(2)(c)</td></tr>
        </tbody></table>
        <p>Kami tidak akan pernah menjual data pribadi Anda kepada pihak ketiga, atau menggunakannya untuk pemasaran yang tidak diminta tanpa persetujuan eksplisit Anda. Di mana kami mengandalkan <strong>kepentingan yang sah</strong>, kami telah menilai bahwa kepentingan kami tidak melebihi hak dan kebebasan Anda.</p>
        <p>Di mana pemrosesan didasarkan pada <strong>persetujuan</strong>, Anda berhak untuk menarik persetujuan Anda kapan saja tanpa mempengaruhi keabsahan pemrosesan sebelumnya.</p>
      </div>
      <div id="priv-share" class="privacy-section reveal">
        <h2 class="privacy-heading">5. Penerima Data</h2>
        <p>Data pribadi Anda dapat dibagikan kepada kategori penerima berikut, secara ketat berdasarkan kebutuhan untuk mengetahui:</p>
        <table class="privacy-table"><thead><tr><th>Penerima</th><th>Tujuan</th><th>Perlindungan</th></tr></thead><tbody>
          <tr><td><strong>Departemen internal</strong> (komersial, operasional, hukum)</td><td>Menangani pertanyaan dan hubungan bisnis</td><td>Terikat oleh kewajiban kerahasiaan kerja</td></tr>
          <tr><td><strong>Web3Forms</strong> (layanan pemrosesan formulir)</td><td>Mengirimkan pengiriman formulir kontak ke email PGT</td><td>Diproses sesuai Kebijakan Privasi Web3Forms; data tidak disimpan jangka panjang</td></tr>
          <tr><td><strong>GitHub Pages</strong> (penyedia hosting website)</td><td>Menyajikan konten website dan log server</td><td>Pernyataan Privasi GitHub berlaku; data disimpan di AS berdasarkan DPA GitHub</td></tr>
          <tr><td><strong>Entitas afiliasi &amp; pemegang saham</strong> (AGL, Toyota Tsusho, Samudera)</td><td>Hanya jika diperlukan untuk pengelolaan transaksi tertentu</td><td>Terikat oleh perjanjian kerahasiaan; data tidak dibagikan untuk pemasaran mereka sendiri</td></tr>
          <tr><td><strong>Penyedia layanan pihak ketiga</strong> (IT, hukum, akuntansi)</td><td>Mendukung fungsi operasional dan administratif PGT</td><td>Diatur oleh perjanjian pemrosesan data dengan perlindungan kontrak yang sesuai</td></tr>
          <tr><td><strong>Otoritas pemerintah &amp; regulasi</strong></td><td>Jika diwajibkan oleh hukum Indonesia atau perintah pengadilan</td><td>Diungkapkan hanya sejauh yang diwajibkan oleh hukum yang berlaku</td></tr>
        </tbody></table>
      </div>
      <div id="priv-transfer" class="privacy-section reveal">
        <h2 class="privacy-heading">6. Transfer Data Internasional</h2>
        <p>Data Anda terutama disimpan dan diproses di Indonesia. Beberapa transfer di luar Indonesia dapat terjadi sehubungan dengan penyedia layanan kami. Dalam semua kasus tersebut, kami memastikan bahwa perlindungan yang sesuai tersedia:</p>
        <ul class="privacy-list">
          <li><strong>Klausul kontrak standar (SCC)</strong> yang disetujui oleh Komisi Eropa, jika data penduduk UE terlibat;</li>
          <li><strong>Keputusan kecukupan Komisi Eropa</strong>, jika negara tujuan telah diakui memberikan perlindungan yang memadai;</li>
          <li><strong>Aturan perusahaan yang mengikat</strong> atau perlindungan setara jika berlaku;</li>
          <li>Kepatuhan terhadap <strong>Bab VIII UU PDP No. 27/2022</strong> untuk semua transfer lintas batas yang melibatkan data pribadi Indonesia.</li>
        </ul>
        <p>Anda dapat meminta informasi tentang mekanisme transfer yang berlaku dengan menghubungi PPD kami.</p>
      </div>
      <div id="priv-retention" class="privacy-section reveal">
        <h2 class="privacy-heading">7. Periode Retensi Data</h2>
        <table class="privacy-table"><thead><tr><th>Kategori data</th><th>Periode penyimpanan</th></tr></thead><tbody>
          <tr><td>Formulir kontak — tidak ada tindak lanjut komersial</td><td>3 tahun sejak tanggal kontak terakhir</td></tr>
          <tr><td>Formulir kontak — hubungan komersial terjalin</td><td>Durasi hubungan + 5 tahun</td></tr>
          <tr><td>Permintaan penawaran harga</td><td>3 tahun sejak tanggal kontak terakhir</td></tr>
          <tr><td>Korespondensi bisnis &amp; kontrak</td><td>Durasi hubungan + 10 tahun (kewajiban komersial)</td></tr>
          <tr><td>Komunikasi email</td><td>3 tahun sejak pertukaran terakhir, atau hingga penarikan persetujuan</td></tr>
          <tr><td>Analitik website / log server</td><td>13 bulan (dianonimkan secara otomatis setelahnya)</td></tr>
          <tr><td>Catatan persetujuan kuki</td><td>13 bulan sejak tanggal persetujuan</td></tr>
        </tbody></table>
        <p>Setelah periode retensi yang berlaku, data dihapus secara aman dan permanen atau dianonimkan secara tidak dapat dipulihkan.</p>
      </div>
      <div id="priv-security" class="privacy-section reveal">
        <h2 class="privacy-heading">8. Keamanan &amp; Hosting</h2>
        <p>PGT menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi data pribadi Anda. Ini meliputi:</p>
        <ul class="privacy-list">
          <li><strong>Enkripsi HTTPS / TLS</strong> untuk semua data yang dikirimkan melalui website ini;</li>
          <li><strong>Kontrol akses</strong> yang membatasi akses staf terhadap data pribadi secara ketat berdasarkan kebutuhan;</li>
          <li><strong>Tinjauan keamanan berkala</strong> atas sistem informasi dan pengaturan penyedia pihak ketiga kami.</li>
        </ul>
        <div class="privacy-info-box" style="margin-top:16px;">
          <div class="privacy-info-row"><span class="privacy-info-label">Penyedia hosting</span><span>GitHub Pages (GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, AS)</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Lokasi data</span><span>Terutama Amerika Serikat; diatur oleh Perjanjian Perlindungan Data dan Pernyataan Privasi GitHub</span></div>
        </div>
        <p>Tidak ada metode transmisi melalui internet yang 100% aman. Jika Anda yakin bahwa interaksi Anda dengan kami telah disusupi, harap beri tahu kami segera di <a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a>.</p>
      </div>
      <div id="priv-cookies" class="privacy-section reveal">
        <h2 class="privacy-heading">9. Kuki &amp; Pelacak</h2>
        <p>Kuki adalah file teks kecil yang ditempatkan pada perangkat Anda saat Anda mengunjungi website kami. Kami hanya menggunakan kategori kuki berikut:</p>
        <table class="privacy-table"><thead><tr><th>Jenis kuki</th><th>Tujuan</th><th>Durasi</th><th>Dasar hukum</th></tr></thead><tbody>
          <tr><td><strong>Sangat diperlukan</strong></td><td>Penting untuk navigasi website dan manajemen sesi (misalnya preferensi bahasa)</td><td>Sesi atau hingga 12 bulan</td><td>Tidak diperlukan — diperlukan secara operasional</td></tr>
          <tr><td><strong>Analitik (dianonimkan)</strong></td><td>Memahami perilaku pengunjung secara agregat — tidak ada data yang dapat diidentifikasi secara pribadi yang disimpan</td><td>Hingga 13 bulan</td><td>Kepentingan yang sah / Persetujuan</td></tr>
        </tbody></table>
        <p>Kami <strong>tidak</strong> menggunakan kuki iklan, kuki pelacak lintas situs, atau pelacak pemasaran pihak ketiga mana pun.</p>
        <p>Sesuai dengan pedoman dari Kementerian Komunikasi dan Digital (Komdigi) dan, jika berlaku, pedoman CNIL untuk pengguna UE, Anda dapat mengelola atau menonaktifkan kuki kapan saja melalui pengaturan browser Anda.</p>
      </div>
      <div id="priv-rights" class="privacy-section reveal">
        <h2 class="privacy-heading">10. Hak-Hak Anda</h2>
        <p>Tergantung pada yurisdiksi Anda, Anda memiliki hak-hak berikut sehubungan dengan data pribadi Anda. Kami berkomitmen untuk memfasilitasi pelaksanaan hak-hak ini dengan cepat dan transparan.</p>
        <div class="privacy-dual-col">
          <div class="privacy-legal-card">
            <div class="privacy-legal-flag">&#127466;&#127482; Berdasarkan GDPR</div>
            <ul>
              <li><strong>Hak akses</strong> — mendapatkan salinan data pribadi Anda (Pasal 15)</li>
              <li><strong>Hak perbaikan</strong> — memperbaiki data yang tidak akurat (Pasal 16)</li>
              <li><strong>Hak penghapusan</strong> — "hak untuk dilupakan" (Pasal 17)</li>
              <li><strong>Hak pembatasan</strong> pemrosesan (Pasal 18)</li>
              <li><strong>Hak portabilitas data</strong> (Pasal 20)</li>
              <li><strong>Hak keberatan</strong> atas pemrosesan berdasarkan kepentingan yang sah (Pasal 21)</li>
              <li><strong>Hak menarik persetujuan</strong> kapan saja (Pasal 7(3))</li>
              <li><strong>Hak mengajukan pengaduan</strong> kepada otoritas pengawas nasional Anda</li>
            </ul>
          </div>
          <div class="privacy-legal-card">
            <div class="privacy-legal-flag">&#127470;&#127465; Berdasarkan UU PDP No. 27/2022</div>
            <ul>
              <li><strong>Hak atas informasi</strong> — mengetahui data apa yang diproses (Pasal 8)</li>
              <li><strong>Hak akses</strong> — mendapatkan data pribadi Anda (Pasal 9)</li>
              <li><strong>Hak koreksi / pembaruan</strong> data yang tidak akurat (Pasal 10)</li>
              <li><strong>Hak penghapusan</strong> data yang tidak lagi diperlukan (Pasal 11)</li>
              <li><strong>Hak menarik persetujuan</strong> kapan saja (Pasal 12)</li>
              <li><strong>Hak keberatan</strong> atas pemrosesan otomatis (Pasal 13)</li>
              <li><strong>Hak portabilitas data</strong> (Pasal 14)</li>
              <li><strong>Hak mengajukan pengaduan</strong> kepada Komdigi</li>
            </ul>
          </div>
        </div>
        <p>Untuk menggunakan hak apa pun, harap kirimkan permintaan Anda secara tertulis kepada PPD kami (lihat Bagian 11 di bawah). Kami akan merespons dalam <strong>30 hari</strong>. Verifikasi identitas mungkin diperlukan sebelum kami memproses permintaan Anda.</p>
        <p>Penduduk UE juga memiliki hak untuk mengajukan pengaduan kepada otoritas pengawas perlindungan data nasional mereka.</p>
      </div>
      <div id="priv-contact" class="privacy-section reveal">
        <h2 class="privacy-heading">11. Pelaksanaan Hak Anda &amp; Kontak</h2>
        <p>Untuk menggunakan hak Anda, mengajukan pertanyaan tentang kebijakan ini, atau mengajukan pengaduan, silakan hubungi Petugas Pelindungan Data kami:</p>
        <div class="privacy-info-box">
          <div class="privacy-info-row"><span class="privacy-info-label">Kontak</span><span>Petugas Pelindungan Data, PT Patimban Global Gateway Terminal</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Email</span><span><a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a></span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Alamat</span><span>Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Jakarta Pusat, Jakarta 10270, Indonesia</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Waktu respons</span><span>Dalam 30 hari sejak diterimanya permintaan yang dapat diverifikasi</span></div>
        </div>
        <p style="margin-top:16px;">Jika Anda adalah penduduk UE dan tidak puas dengan respons kami, Anda memiliki hak untuk mengajukan pengaduan kepada otoritas pengawas perlindungan data nasional Anda. Jika Anda adalah penduduk Indonesia, Anda dapat mengajukan pengaduan kepada <strong>Komdigi</strong> (Kementerian Komunikasi dan Digital Republik Indonesia).</p>
      </div>
      <div id="priv-changes" class="privacy-section reveal" style="margin-bottom:64px;">
        <h2 class="privacy-heading">12. Perubahan Kebijakan Ini</h2>
        <p>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam hukum yang berlaku, teknologi kami, atau operasi bisnis kami. Perubahan material akan ditunjukkan dengan memperbarui tanggal <em>"Terakhir diperbarui"</em> di bagian atas halaman ini.</p>
        <p>Penggunaan berkelanjutan atas website kami setelah publikasi perubahan apa pun merupakan penerimaan Anda atas kebijakan yang direvisi.</p>
        <div style="margin-top:32px;padding:20px 24px;background:var(--navy);border-radius:10px;color:rgba(255,255,255,.7);font-size:13px;line-height:1.9;">
          <strong style="color:#fff;">Kerangka yang berlaku:</strong> Kebijakan ini diatur dan ditafsirkan sesuai dengan Undang-Undang Indonesia No. 27/2022 tentang Pelindungan Data Pribadi (UU PDP). Di mana subjek data adalah penduduk UE, GDPR (Regulasi (UE) 2016/679) juga berlaku. Jika terjadi konflik antara kedua kerangka tersebut, ketentuan yang lebih ketat yang berlaku.
        </div>
      </div>`;

// ── 4. BUILD CHINESE BODY CONTENT ────────────────────────────────────────────
const privBodyZH = `
      <div class="privacy-toc reveal" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:28px 32px;margin-bottom:48px;">
        <h3 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--teal);margin-bottom:16px;">目录</h3>
        <ol style="columns:2;gap:32px;margin:0;padding-left:20px;font-size:14px;color:var(--navy);">
          <li><a href="#priv-who" style="color:var(--navy);text-decoration:none;">数据控制者</a></li>
          <li><a href="#priv-dpo" style="color:var(--navy);text-decoration:none;">数据保护官</a></li>
          <li><a href="#priv-data" style="color:var(--navy);text-decoration:none;">我们收集的数据</a></li>
          <li><a href="#priv-purpose" style="color:var(--navy);text-decoration:none;">处理目的与法律依据</a></li>
          <li><a href="#priv-share" style="color:var(--navy);text-decoration:none;">数据接收方</a></li>
          <li><a href="#priv-transfer" style="color:var(--navy);text-decoration:none;">国际数据传输</a></li>
          <li><a href="#priv-retention" style="color:var(--navy);text-decoration:none;">保留期限</a></li>
          <li><a href="#priv-security" style="color:var(--navy);text-decoration:none;">安全与托管</a></li>
          <li><a href="#priv-cookies" style="color:var(--navy);text-decoration:none;">Cookie与跟踪技术</a></li>
          <li><a href="#priv-rights" style="color:var(--navy);text-decoration:none;">您的权利</a></li>
          <li><a href="#priv-contact" style="color:var(--navy);text-decoration:none;">行使权利与联系方式</a></li>
          <li><a href="#priv-changes" style="color:var(--navy);text-decoration:none;">政策变更</a></li>
        </ol>
      </div>
      <div class="privacy-section reveal" style="background:#f0f9ff;border-left:4px solid var(--teal);padding:20px 24px;border-radius:0 10px 10px 0;margin-bottom:48px;">
        <p style="margin:0;font-size:14px;line-height:1.8;">PT Patimban Global Gateway Terminal致力于保护您的个人数据并尊重您的隐私。本政策说明我们如何依据印度尼西亚<strong>《第27/2022号个人数据保护法》（UU PDP）</strong>以及适用的<strong>欧盟《通用数据保护条例》（GDPR，条例2016/679）</strong>收集、使用、共享和保留个人数据。</p>
      </div>
      <div id="priv-who" class="privacy-section reveal">
        <h2 class="privacy-heading">1. 数据控制者</h2>
        <p>负责您个人数据的数据控制者为：</p>
        <div class="privacy-info-box">
          <div class="privacy-info-row"><span class="privacy-info-label">法律名称</span><span>PT Patimban Global Gateway Terminal</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">注册地址</span><span>Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270, 印度尼西亚</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">电子邮件</span><span><a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a></span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">网站</span><span>https://pgt.id</span></div>
        </div>
        <p>PGT在GDPR第4(7)条和UU PDP第1(4)条的含义范围内，作为通过本网站处理的所有个人数据的<strong>数据控制者</strong>。</p>
      </div>
      <div id="priv-dpo" class="privacy-section reveal">
        <h2 class="privacy-heading">2. 数据保护官</h2>
        <p>PGT已指定一名数据保护官，负责监督对适用数据保护法律的遵守情况。您可直接联系数据保护官提出任何隐私相关问题或行使您的权利：</p>
        <div class="privacy-info-box">
          <div class="privacy-info-row"><span class="privacy-info-label">职位</span><span>数据保护官，PT Patimban Global Gateway Terminal</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">电子邮件</span><span><a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a></span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">地址</span><span>Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270, 印度尼西亚</span></div>
        </div>
      </div>
      <div id="priv-data" class="privacy-section reveal">
        <h2 class="privacy-heading">3. 我们收集的个人数据</h2>
        <p>我们仅收集足够、相关且限于本政策所述目的所需的个人数据。这包括以下类别：</p>
        <h3 class="privacy-subheading">a) 身份识别与联系信息</h3>
        <table class="privacy-table"><thead><tr><th>数据项</th><th>来源</th></tr></thead><tbody>
          <tr><td>名字、姓氏</td><td>联系表单、商业往来</td></tr>
          <tr><td>公司/组织名称</td><td>联系表单、商业往来</td></tr>
          <tr><td>专业电子邮件地址</td><td>联系表单、商业往来</td></tr>
          <tr><td>电话号码</td><td>联系表单、商业往来</td></tr>
          <tr><td>职务/专业角色</td><td>商业往来、会议</td></tr>
        </tbody></table>
        <h3 class="privacy-subheading">b) 专业与运营信息</h3>
        <table class="privacy-table"><thead><tr><th>数据项</th><th>来源</th></tr></thead><tbody>
          <tr><td>公司治理详情（用于合同入职流程）</td><td>营业执照文件</td></tr>
          <tr><td>货物/货运的来源国和目的国</td><td>运营沟通</td></tr>
          <tr><td>货物量和性质（与报价相关时）</td><td>报价请求</td></tr>
          <tr><td>询问的主题和内容</td><td>联系表单</td></tr>
        </tbody></table>
        <h3 class="privacy-subheading">c) 自动收集的数据</h3>
        <table class="privacy-table"><thead><tr><th>数据项</th><th>来源</th></tr></thead><tbody>
          <tr><td>IP地址（在技术可行的情况下进行匿名化处理）</td><td>服务器日志</td></tr>
          <tr><td>浏览器类型、设备类型、操作系统</td><td>服务器日志</td></tr>
          <tr><td>访问页面、访问时长、来源URL</td><td>分析（匿名化）</td></tr>
        </tbody></table>
        <p style="font-size:13px;color:#64748b;margin-top:8px;">我们不通过本网站收集敏感类别的个人数据（健康数据、生物特征数据、财务账户详情等）。</p>
      </div>
      <div id="priv-purpose" class="privacy-section reveal">
        <h2 class="privacy-heading">4. 处理目的与法律依据</h2>
        <p>我们出于以下特定目的处理您的个人数据，每项目的均有GDPR和UU PDP下的法律依据支持：</p>
        <table class="privacy-table"><thead><tr><th>目的</th><th>使用的数据</th><th>法律依据（GDPR）</th><th>法律依据（UU PDP）</th></tr></thead><tbody>
          <tr><td>回复联系表单提交的询问</td><td>姓名、公司、电子邮件、电话、留言</td><td>同意——第6(1)(a)条</td><td>同意——第20(1)条</td></tr>
          <tr><td>处理报价请求</td><td>姓名、公司、运营详情</td><td>合同前措施——第6(1)(b)条</td><td>合同——第20(2)(b)条</td></tr>
          <tr><td>商业跟进与业务发展</td><td>姓名、公司、电子邮件、电话</td><td>合法权益——第6(1)(f)条</td><td>合法权益——第20(2)(f)条</td></tr>
          <tr><td>发送所请求的信息与通讯</td><td>姓名、电子邮件</td><td>同意——第6(1)(a)条</td><td>同意——第20(1)条</td></tr>
          <tr><td>电子邮件通讯与更新（非营销）</td><td>姓名、电子邮件</td><td>合法权益——第6(1)(f)条</td><td>合法权益——第20(2)(f)条</td></tr>
          <tr><td>改善网站性能与用户体验</td><td>匿名化使用数据</td><td>合法权益——第6(1)(f)条</td><td>合法权益——第20(2)(f)条</td></tr>
          <tr><td>欺诈预防与网站安全</td><td>IP地址、技术数据</td><td>合法权益——第6(1)(f)条</td><td>合法权益——第20(2)(f)条</td></tr>
          <tr><td>遵守法律义务</td><td>适用法律要求的内容</td><td>法律义务——第6(1)(c)条</td><td>法律义务——第20(2)(c)条</td></tr>
        </tbody></table>
        <p>我们绝不会将您的个人数据出售给第三方，也不会在未经您明确事先同意的情况下将其用于未经请求的营销。</p>
        <p>在处理基于<strong>同意</strong>的情况下，您有权随时撤回同意，而不影响撤回前已进行的处理的合法性。</p>
      </div>
      <div id="priv-share" class="privacy-section reveal">
        <h2 class="privacy-heading">5. 数据接收方</h2>
        <p>您的个人数据可能在严格按需共享的基础上与以下类别的接收方共享：</p>
        <table class="privacy-table"><thead><tr><th>接收方</th><th>目的</th><th>保障措施</th></tr></thead><tbody>
          <tr><td><strong>内部部门</strong>（商务、运营、法务）</td><td>处理询问和商业关系</td><td>受雇佣保密义务约束</td></tr>
          <tr><td><strong>Web3Forms</strong>（表单处理服务）</td><td>将联系表单提交传送至PGT电子邮件</td><td>依据Web3Forms隐私政策处理；数据不作长期保留</td></tr>
          <tr><td><strong>GitHub Pages</strong>（网站托管服务商）</td><td>提供网站内容服务和服务器日志</td><td>适用GitHub隐私声明；数据依据GitHub数据处理协议存储于美国</td></tr>
          <tr><td><strong>关联实体与股东</strong>（AGL、丰田通商、萨穆德拉）</td><td>仅在特定交易或运营管理所需时</td><td>受保密协议约束；数据不用于其自身营销目的</td></tr>
          <tr><td><strong>外包服务提供商</strong>（IT、法务、会计）</td><td>支持PGT的运营和行政职能</td><td>受具有适当合同保障的数据处理协议约束</td></tr>
          <tr><td><strong>政府及监管机构</strong></td><td>依印度尼西亚法律、港口法规或法院命令要求</td><td>仅在适用法律严格要求的范围内披露</td></tr>
        </tbody></table>
      </div>
      <div id="priv-transfer" class="privacy-section reveal">
        <h2 class="privacy-heading">6. 国际数据传输</h2>
        <p>您的数据主要在印度尼西亚存储和处理。与我们的服务提供商相关的一些传输可能发生在印度尼西亚境外。在所有此类情况下，我们确保采取适当的保障措施：</p>
        <ul class="privacy-list">
          <li><strong>欧洲委员会批准的标准合同条款（SCC）</strong>，适用于涉及欧盟居民数据的情况；</li>
          <li><strong>欧洲委员会充分性决定</strong>，适用于目的地国已被认定提供充分保护的情况；</li>
          <li><strong>具有约束力的公司规则</strong>或同等保障措施（如适用）；</li>
          <li>遵守<strong>UU PDP第27/2022号第VIII章</strong>关于涉及印度尼西亚个人数据的跨境传输的规定。</li>
        </ul>
        <p>您可通过联系我们的数据保护官来请求有关所采用传输机制的信息。</p>
      </div>
      <div id="priv-retention" class="privacy-section reveal">
        <h2 class="privacy-heading">7. 数据保留期限</h2>
        <table class="privacy-table"><thead><tr><th>数据类别</th><th>保留期限</th></tr></thead><tbody>
          <tr><td>联系表单提交——无后续商业跟进</td><td>自最后联系之日起3年</td></tr>
          <tr><td>联系表单提交——已建立商业关系</td><td>关系存续期间 + 5年</td></tr>
          <tr><td>报价请求</td><td>自最后联系之日起3年</td></tr>
          <tr><td>商业往来与合同</td><td>关系存续期间 + 10年（法定商业义务）</td></tr>
          <tr><td>电子邮件通讯</td><td>自最后往来之日起3年，或至撤回同意为止</td></tr>
          <tr><td>网站分析/服务器日志</td><td>13个月（此后自动匿名化）</td></tr>
          <tr><td>Cookie同意记录</td><td>自同意之日起13个月</td></tr>
        </tbody></table>
        <p>适用保留期届满后，数据将被安全永久删除或不可逆地匿名化处理。</p>
      </div>
      <div id="priv-security" class="privacy-section reveal">
        <h2 class="privacy-heading">8. 安全与托管</h2>
        <p>PGT采取适当的技术和组织安全措施，保护您的个人数据。这些措施包括：</p>
        <ul class="privacy-list">
          <li><strong>HTTPS/TLS加密</strong>，适用于通过本网站传输的所有数据；</li>
          <li><strong>访问控制</strong>，严格按需限制员工对个人数据的访问；</li>
          <li><strong>定期审查</strong>我们的信息系统和第三方提供商安排的安全性。</li>
        </ul>
        <div class="privacy-info-box" style="margin-top:16px;">
          <div class="privacy-info-row"><span class="privacy-info-label">托管服务商</span><span>GitHub Pages（GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, 美国）</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">数据存储地</span><span>主要在美国；受GitHub数据处理协议和隐私声明约束</span></div>
        </div>
        <p>互联网传输没有任何方式是100%安全的。如果您认为您与我们的交互已被泄露，请立即通过<a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a>通知我们。</p>
      </div>
      <div id="priv-cookies" class="privacy-section reveal">
        <h2 class="privacy-heading">9. Cookie与跟踪技术</h2>
        <p>Cookie是您访问我们网站时放置在您设备上的小型文本文件。我们仅使用以下类别的Cookie：</p>
        <table class="privacy-table"><thead><tr><th>Cookie类型</th><th>目的</th><th>时长</th><th>法律依据</th></tr></thead><tbody>
          <tr><td><strong>严格必要</strong></td><td>网站导航和会话管理所必需（如语言偏好）</td><td>会话或最多12个月</td><td>无需——操作所必需</td></tr>
          <tr><td><strong>分析（匿名化）</strong></td><td>了解整体访客行为——不存储任何个人身份信息</td><td>最多13个月</td><td>合法权益/同意</td></tr>
        </tbody></table>
        <p>我们<strong>不</strong>使用广告Cookie、跨网站跟踪Cookie或任何第三方营销跟踪器。</p>
        <p>您可随时通过浏览器设置管理或禁用Cookie。请注意，禁用严格必要的Cookie可能会影响网站功能。</p>
      </div>
      <div id="priv-rights" class="privacy-section reveal">
        <h2 class="privacy-heading">10. 您的权利</h2>
        <p>根据您所在的司法管辖区，您对个人数据享有以下权利。我们致力于及时、透明地协助您行使这些权利。</p>
        <div class="privacy-dual-col">
          <div class="privacy-legal-card">
            <div class="privacy-legal-flag">&#127466;&#127482; 根据GDPR</div>
            <ul>
              <li><strong>访问权</strong>——获取您个人数据的副本（第15条）</li>
              <li><strong>更正权</strong>——更正不准确的数据（第16条）</li>
              <li><strong>删除权</strong>——"被遗忘权"（第17条）</li>
              <li><strong>限制处理权</strong>（第18条）</li>
              <li><strong>数据可携权</strong>（第20条）</li>
              <li><strong>反对权</strong>——反对基于合法权益的处理（第21条）</li>
              <li><strong>随时撤回同意的权利</strong>（第7(3)条）</li>
              <li><strong>向国家监管机构投诉的权利</strong></li>
            </ul>
          </div>
          <div class="privacy-legal-card">
            <div class="privacy-legal-flag">&#127470;&#127465; 根据UU PDP第27/2022号</div>
            <ul>
              <li><strong>知情权</strong>——了解处理哪些数据及原因（第8条）</li>
              <li><strong>访问权</strong>——获取您的个人数据（第9条）</li>
              <li><strong>更正/更新权</strong>——更正不准确数据（第10条）</li>
              <li><strong>删除权</strong>——删除不再必要的数据（第11条）</li>
              <li><strong>随时撤回同意的权利</strong>（第12条）</li>
              <li><strong>反对自动化处理的权利</strong>（第13条）</li>
              <li><strong>数据可携权</strong>（第14条）</li>
              <li><strong>向Komdigi投诉的权利</strong>（通信和数字部）</li>
            </ul>
          </div>
        </div>
        <p>如需行使任何权利，请以书面形式向我们的数据保护官提交请求（见下文第11节）。我们将在<strong>30天</strong>内回复。在处理您的请求之前，可能需要验证您的身份。</p>
        <p>欧盟居民还有权向其国家数据保护监管机构提出投诉。</p>
      </div>
      <div id="priv-contact" class="privacy-section reveal">
        <h2 class="privacy-heading">11. 行使权利与联系方式</h2>
        <p>如需行使您的权利、就本政策提出问题或提出投诉，请联系我们的数据保护官：</p>
        <div class="privacy-info-box">
          <div class="privacy-info-row"><span class="privacy-info-label">联系人</span><span>数据保护官，PT Patimban Global Gateway Terminal</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">电子邮件</span><span><a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a></span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">地址</span><span>Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270, 印度尼西亚</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">响应时间</span><span>自收到可验证请求之日起30天内</span></div>
        </div>
        <p style="margin-top:16px;">如果您是欧盟居民且对我们的回复不满意，您有权向您的国家数据保护监管机构提出投诉。如果您是印度尼西亚居民，您可向<strong>Komdigi</strong>（印度尼西亚通信和数字部）提出投诉。</p>
      </div>
      <div id="priv-changes" class="privacy-section reveal" style="margin-bottom:64px;">
        <h2 class="privacy-heading">12. 政策变更</h2>
        <p>我们可能会不时更新本隐私政策，以反映适用法律、技术或业务运营的变化。重大变更将通过更新本页顶部的<em>"最后更新"</em>日期来标注。</p>
        <p>在发布任何变更后继续使用我们的网站，即表示您接受修订后的政策。</p>
        <div style="margin-top:32px;padding:20px 24px;background:var(--navy);border-radius:10px;color:rgba(255,255,255,.7);font-size:13px;line-height:1.9;">
          <strong style="color:#fff;">适用框架：</strong>本政策受印度尼西亚《第27/2022号个人数据保护法》（UU PDP）管辖和解释。如数据主体为欧盟居民，则欧盟GDPR（条例（EU）2016/679）亦适用。如两个框架之间存在冲突，则适用较严格的规定。
        </div>
      </div>`;

// ── 5. TC INDONESIAN BODY ─────────────────────────────────────────────────────
const tcBodyID = `
      <div class="privacy-toc reveal" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:28px 32px;margin-bottom:48px;">
        <h3 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--teal);margin-bottom:16px;">Daftar Isi</h3>
        <ol style="columns:2;gap:32px;margin:0;padding-left:20px;font-size:14px;color:var(--navy);">
          <li><a href="#tc-operator" style="color:var(--navy);text-decoration:none;">Operator Website</a></li>
          <li><a href="#tc-access" style="color:var(--navy);text-decoration:none;">Akses ke Website</a></li>
          <li><a href="#tc-prohibited" style="color:var(--navy);text-decoration:none;">Penggunaan yang Dilarang</a></li>
          <li><a href="#tc-content" style="color:var(--navy);text-decoration:none;">Konten &amp; Keakuratan</a></li>
          <li><a href="#tc-ip" style="color:var(--navy);text-decoration:none;">Kekayaan Intelektual</a></li>
          <li><a href="#tc-liability" style="color:var(--navy);text-decoration:none;">Pembatasan Tanggung Jawab</a></li>
          <li><a href="#tc-tariffs" style="color:var(--navy);text-decoration:none;">Dokumen Tarif</a></li>
          <li><a href="#tc-links" style="color:var(--navy);text-decoration:none;">Tautan Pihak Ketiga</a></li>
          <li><a href="#tc-privacy" style="color:var(--navy);text-decoration:none;">Privasi &amp; Perlindungan Data</a></li>
          <li><a href="#tc-law" style="color:var(--navy);text-decoration:none;">Hukum yang Mengatur &amp; Yurisdiksi</a></li>
          <li><a href="#tc-changes" style="color:var(--navy);text-decoration:none;">Perubahan Syarat</a></li>
          <li><a href="#tc-general" style="color:var(--navy);text-decoration:none;">Ketentuan Umum</a></li>
        </ol>
      </div>
      <div id="tc-operator" class="privacy-section reveal">
        <h2 class="privacy-heading">1. Operator Website</h2>
        <p>Website ini (<strong>"Website"</strong>) dioperasikan oleh:</p>
        <div class="privacy-info-box">
          <div class="privacy-info-row"><span class="privacy-info-label">Perusahaan</span><span>PT Patimban Global Gateway Terminal (<strong>"PGT"</strong>)</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Alamat</span><span>Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Jakarta Pusat, Jakarta 10270, Indonesia</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Email</span><span><a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a></span></div>
        </div>
        <p>Syarat &amp; Ketentuan Penggunaan ini (<strong>"Syarat"</strong>) mengatur akses dan penggunaan Website Anda. Dengan mengakses atau menggunakan Website, Anda setuju untuk terikat oleh Syarat ini. Jika Anda tidak setuju, Anda harus segera berhenti menggunakan Website.</p>
        <p>Syarat ini hanya berlaku untuk Website dan tidak mempengaruhi syarat dan ketentuan kontrak apa pun yang mungkin berlaku untuk penyediaan layanan pelabuhan, operasi terminal, atau pengaturan komersial lainnya dengan PGT, yang diatur oleh perjanjian terpisah.</p>
      </div>
      <div id="tc-access" class="privacy-section reveal">
        <h2 class="privacy-heading">2. Akses ke Website</h2>
        <p>PGT memberikan Anda lisensi terbatas, non-eksklusif, tidak dapat dipindahtangankan, dan dapat dicabut untuk mengakses dan menggunakan Website untuk tujuan informasi yang sah saja, tunduk pada Syarat ini.</p>
        <p>PGT berhak, atas kebijakannya sendiri dan tanpa pemberitahuan sebelumnya, untuk:</p>
        <ul class="privacy-list">
          <li>Membatasi, menangguhkan, atau mengakhiri akses Anda ke semua atau bagian mana pun dari Website;</li>
          <li>Memodifikasi, memperbarui, atau menghentikan Website atau fitur apa pun darinya;</li>
          <li>Memberlakukan kondisi atau batasan akses untuk pengguna atau kategori pengguna mana pun.</li>
        </ul>
        <p>PGT tidak menjamin bahwa Website akan tersedia secara terus-menerus, bebas dari kesalahan, atau bebas dari gangguan. <strong>PGT tidak menjamin keamanan Website terhadap semua bentuk serangan siber.</strong> Pengguna bertanggung jawab untuk memelihara langkah-langkah keamanan yang sesuai pada sistem mereka sendiri.</p>
      </div>
      <div id="tc-prohibited" class="privacy-section reveal">
        <h2 class="privacy-heading">3. Penggunaan yang Dilarang</h2>
        <p>Anda setuju untuk tidak menggunakan Website dengan cara yang:</p>
        <h3 class="privacy-subheading">a) Melanggar hukum yang berlaku</h3>
        <ul class="privacy-list">
          <li>Melanggar hukum Indonesia, peraturan UE, atau hukum atau peraturan nasional atau internasional lain yang berlaku;</li>
          <li>Melanggar hak pihak ketiga mana pun, termasuk hak kekayaan intelektual, hak privasi, atau hak kontrak;</li>
          <li>Merupakan penipuan, salah representasi, atau perilaku menipu.</li>
        </ul>
        <h3 class="privacy-subheading">b) Membahayakan keamanan atau integritas</h3>
        <ul class="privacy-list">
          <li>Memperkenalkan, mengirimkan, atau mengunggah virus, malware, ransomware, spyware, atau kode berbahaya lainnya;</li>
          <li>Mencoba mendapatkan akses tidak sah ke Website, server, database, atau sistem terhubungnya;</li>
          <li>Mengganggu, merusak, atau menurunkan kinerja atau ketersediaan Website atau infrastrukturnya;</li>
          <li>Menggunakan alat otomatis (crawler, bot, scraper) tanpa persetujuan tertulis sebelumnya dari PGT.</li>
        </ul>
        <h3 class="privacy-subheading">c) Menyalahgunakan konten</h3>
        <ul class="privacy-list">
          <li>Mereproduksi, menyalin, atau mengeksploitasi secara komersial konten apa pun dari Website ini tanpa otorisasi tertulis eksplisit dari PGT;</li>
          <li>Salah merepresentasikan afiliasi Anda dengan PGT atau menyamar sebagai perwakilan PGT;</li>
          <li>Menggunakan konten atau materi Website untuk bersaing dengan kegiatan bisnis PGT.</li>
        </ul>
        <p>Pelanggaran ketentuan penggunaan yang dilarang dapat mengakibatkan pemutusan akses segera dan dapat membuat Anda menghadapi tanggung jawab perdata atau pidana berdasarkan hukum yang berlaku.</p>
      </div>
      <div id="tc-content" class="privacy-section reveal">
        <h2 class="privacy-heading">4. Konten &amp; Keakuratan Informasi</h2>
        <p>Informasi yang dipublikasikan di Website ini disediakan untuk tujuan informasi umum saja. <strong>PGT tidak menjamin keakuratan, kelengkapan, keandalan, atau ketepatan waktu informasi apa pun di Website ini.</strong></p>
        <p>Khususnya:</p>
        <ul class="privacy-list">
          <li>Spesifikasi terminal, angka kapasitas, dan data operasional dapat berubah sewaktu-waktu tanpa pemberitahuan;</li>
          <li>Artikel berita dan konten media mencerminkan informasi yang tersedia pada saat publikasi;</li>
          <li>Informasi yang diberikan sebagai respons terhadap pengiriman formulir kontak bersifat pendahuluan dan tidak merupakan penawaran mengikat;</li>
          <li>Pernyataan yang berorientasi ke depan mengenai pengembangan pelabuhan atau jadwal dapat berubah.</li>
        </ul>
        <p>Pengguna harus memverifikasi secara independen informasi apa pun sebelum mengandalkannya untuk keputusan komersial atau hukum.</p>
      </div>
      <div id="tc-ip" class="privacy-section reveal">
        <h2 class="privacy-heading">5. Hak Kekayaan Intelektual</h2>
        <p>Semua konten di Website ini adalah milik eksklusif PT Patimban Global Gateway Terminal atau pemberi lisensinya dan dilindungi oleh hukum kekayaan intelektual Indonesia dan internasional, termasuk:</p>
        <ul class="privacy-list">
          <li>Undang-Undang Indonesia No. 28/2014 tentang Hak Cipta;</li>
          <li>Undang-Undang Indonesia No. 20/2016 tentang Merek Dagang dan Indikasi Geografis;</li>
          <li>Konvensi internasional yang berlaku yang menjadi pihak Indonesia.</li>
        </ul>
        <p>Tidak ada konten dari Website ini yang dapat disalin, direproduksi, dimodifikasi, didistribusikan, atau digunakan dalam konteks komersial apa pun tanpa persetujuan tertulis eksplisit sebelumnya dari PGT.</p>
        <p>Penggunaan pribadi non-komersial atas konten Website diperbolehkan dengan syarat semua pemberitahuan hak cipta dipertahankan dan PGT dikreditkan sebagai sumber.</p>
      </div>
      <div id="tc-liability" class="privacy-section reveal">
        <h2 class="privacy-heading">6. Pembatasan Tanggung Jawab</h2>
        <p>Sejauh diizinkan oleh hukum yang berlaku, PGT tidak bertanggung jawab atas kerugian atau kerusakan yang timbul dari:</p>
        <ul class="privacy-list">
          <li>Akses Anda ke, penggunaan, atau ketidakmampuan untuk mengakses atau menggunakan Website;</li>
          <li>Ketergantungan apa pun pada informasi atau konten yang dipublikasikan di Website;</li>
          <li>Gangguan, penangguhan, atau penghentian Website atau layanan apa pun;</li>
          <li>Akses tidak sah ke atau perubahan pada transmisi data Anda;</li>
          <li>Penyusupan penipuan, malware, virus, atau kode berbahaya lainnya;</li>
          <li>Konten apa pun yang disediakan oleh atau terhubung ke website pihak ketiga.</li>
        </ul>
        <p>Di mana hukum yang berlaku tidak mengizinkan pengecualian tanggung jawab secara lengkap, total tanggung jawab PGT yang timbul sehubungan dengan Website tidak akan melebihi <strong>IDR 10.000.000 (sepuluh juta Rupiah Indonesia)</strong> per klaim atau serangkaian klaim terkait.</p>
        <p><em>Pembatasan ini tidak berlaku untuk: (i) kematian atau cedera pribadi yang disebabkan oleh kelalaian PGT; (ii) penipuan atau salah representasi penipuan; atau (iii) tanggung jawab yang tidak dapat dikecualikan oleh hukum Indonesia.</em></p>
      </div>
      <div id="tc-tariffs" class="privacy-section reveal">
        <h2 class="privacy-heading">7. Dokumen Tarif</h2>
        <p>Dokumen tarif yang tersedia untuk diunduh di Website ini disediakan untuk <strong>tujuan informasi saja</strong>. Dokumen-dokumen ini mewakili tarif standar indikatif dan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.</p>
        <ul class="privacy-list">
          <li>Tarif yang dipublikasikan bukan merupakan penawaran mengikat atau komitmen kontrak oleh PGT;</li>
          <li>Tarif akhir yang berlaku akan dikonfirmasi dalam perjanjian komersial terpisah atau penawaran harga tertulis;</li>
          <li>Semua tarif dikutip dalam USD kecuali dinyatakan sebaliknya, dan tunduk pada pajak Indonesia yang berlaku;</li>
          <li>Diskon volume dan tarif kontrak jangka panjang tersedia tunduk pada negosiasi terpisah.</li>
        </ul>
        <p>Untuk informasi tarif yang akurat dan mengikat, silakan hubungi tim komersial PGT secara langsung melalui halaman Kontak.</p>
      </div>
      <div id="tc-links" class="privacy-section reveal">
        <h2 class="privacy-heading">8. Tautan Pihak Ketiga &amp; Website Eksternal</h2>
        <p>Website ini mungkin berisi tautan ke website eksternal yang dioperasikan oleh pihak ketiga, termasuk pemegang saham PGT (Africa Global Logistics, Toyota Tsusho Corporation, Samudera Pelabuhan Indonesia) dan organisasi industri lainnya.</p>
        <p><strong>PGT tidak memiliki kendali atas, dan tidak menerima tanggung jawab atas, konten, praktik privasi, keamanan, atau keakuratan website pihak ketiga mana pun.</strong> Penyertaan tautan tidak menyiratkan dukungan website yang ditautkan atau operatornya oleh PGT.</p>
        <p>Pengguna yang mengakses website pihak ketiga melakukannya atas risiko mereka sendiri dan harus meninjau syarat dan kebijakan privasi website tersebut secara independen.</p>
      </div>
      <div id="tc-privacy" class="privacy-section reveal">
        <h2 class="privacy-heading">9. Privasi &amp; Perlindungan Data</h2>
        <p>Pengumpulan, pemrosesan, dan penyimpanan data pribadi apa pun yang dikirimkan melalui Website ini diatur oleh <strong>Kebijakan Privasi PGT</strong>, yang dimasukkan ke dalam Syarat ini dengan referensi.</p>
        <p>Dengan menggunakan Website ini, Anda mengakui bahwa Anda telah membaca dan memahami Kebijakan Privasi. Untuk melihat Kebijakan Privasi lengkap, termasuk hak-hak Anda sebagai subjek data, <a href="javascript:void(0)" onclick="navigateTo('privacy')" style="color:var(--teal);font-weight:600;">klik di sini</a>.</p>
      </div>
      <div id="tc-law" class="privacy-section reveal">
        <h2 class="privacy-heading">10. Hukum yang Mengatur &amp; Yurisdiksi</h2>
        <p>Syarat-syarat ini diatur dan ditafsirkan sesuai dengan hukum <strong>Republik Indonesia</strong>.</p>
        <p>Pengadilan <strong>Jakarta, Indonesia</strong> akan memiliki yurisdiksi eksklusif untuk menyelesaikan setiap sengketa atau klaim yang timbul dari atau sehubungan dengan Syarat-syarat ini, tunduk pada hak PGT untuk mencari tindakan injungtif atau mendesak lainnya di yurisdiksi yang kompeten.</p>
        <p>Tidak ada dalam Syarat ini yang membatasi hak PGT untuk membawa proses hukum di yurisdiksi mana pun yang dianggap tepat untuk melindungi hak kekayaan intelektual atau kepentingan kepemilikan lainnya.</p>
      </div>
      <div id="tc-changes" class="privacy-section reveal">
        <h2 class="privacy-heading">11. Perubahan Syarat</h2>
        <p>PGT berhak untuk merevisi Syarat-syarat ini kapan saja. Syarat yang direvisi akan dipublikasikan di halaman ini dengan tanggal "Terakhir diperbarui" yang diperbarui. Adalah tanggung jawab Anda untuk meninjau Syarat-syarat ini secara teratur.</p>
        <p><strong>Penggunaan berkelanjutan atas Website setelah publikasi Syarat yang direvisi merupakan penerimaan Anda atas perubahan tersebut.</strong> Jika Anda tidak setuju dengan Syarat yang direvisi, Anda harus segera berhenti menggunakan Website.</p>
      </div>
      <div id="tc-general" class="privacy-section reveal" style="margin-bottom:64px;">
        <h2 class="privacy-heading">12. Ketentuan Umum</h2>
        <p><strong>Perjanjian lengkap.</strong> Syarat-syarat ini, bersama dengan Kebijakan Privasi dan pemberitahuan hukum lain yang dipublikasikan di Website ini, merupakan keseluruhan perjanjian antara Anda dan PGT sehubungan dengan penggunaan Website Anda.</p>
        <p><strong>Pemisahan.</strong> Jika ketentuan apa pun dari Syarat-syarat ini ditemukan sebagai tidak valid atau tidak dapat ditegakkan, ketentuan tersebut akan dianggap dipisahkan dan ketentuan yang tersisa akan terus berlaku penuh.</p>
        <p><strong>Tidak ada pengabaian.</strong> Kegagalan PGT untuk menegakkan hak atau ketentuan apa pun dari Syarat-syarat ini tidak merupakan pengabaian hak atau ketentuan tersebut kecuali secara eksplisit diakui secara tertulis.</p>
        <p><strong>Bahasa.</strong> Syarat-syarat ini disusun dalam bahasa Inggris. Jika terjadi ketidakkonsistenan antara versi bahasa Inggris dan versi terjemahan mana pun, versi bahasa Inggris yang berlaku.</p>
        <p><strong>Kontak.</strong> Pertanyaan tentang Syarat-syarat ini harus ditujukan kepada: <a href="mailto:info@pgt.id" style="color:var(--teal);font-weight:600;">info@pgt.id</a> — PT Patimban Global Gateway Terminal, Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Jakarta Pusat, Jakarta 10270, Indonesia.</p>
        <div style="margin-top:32px;padding:20px 24px;background:var(--navy);border-radius:10px;color:rgba(255,255,255,.7);font-size:13px;line-height:1.9;">
          <strong style="color:#fff;">Hukum yang berlaku:</strong> Syarat-syarat ini diatur oleh hukum Indonesia, termasuk namun tidak terbatas pada Undang-Undang No. 11/2008 tentang Informasi dan Transaksi Elektronik (UU ITE), sebagaimana diubah oleh Undang-Undang No. 19/2016, dan Undang-Undang No. 8/1999 tentang Perlindungan Konsumen (UUPK).
        </div>
      </div>`;

// ── 6. TC CHINESE BODY ────────────────────────────────────────────────────────
const tcBodyZH = `
      <div class="privacy-toc reveal" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:28px 32px;margin-bottom:48px;">
        <h3 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--teal);margin-bottom:16px;">目录</h3>
        <ol style="columns:2;gap:32px;margin:0;padding-left:20px;font-size:14px;color:var(--navy);">
          <li><a href="#tc-operator" style="color:var(--navy);text-decoration:none;">网站运营商</a></li>
          <li><a href="#tc-access" style="color:var(--navy);text-decoration:none;">网站访问</a></li>
          <li><a href="#tc-prohibited" style="color:var(--navy);text-decoration:none;">禁止行为</a></li>
          <li><a href="#tc-content" style="color:var(--navy);text-decoration:none;">内容与准确性</a></li>
          <li><a href="#tc-ip" style="color:var(--navy);text-decoration:none;">知识产权</a></li>
          <li><a href="#tc-liability" style="color:var(--navy);text-decoration:none;">责任限制</a></li>
          <li><a href="#tc-tariffs" style="color:var(--navy);text-decoration:none;">关税文件</a></li>
          <li><a href="#tc-links" style="color:var(--navy);text-decoration:none;">第三方链接</a></li>
          <li><a href="#tc-privacy" style="color:var(--navy);text-decoration:none;">隐私与数据保护</a></li>
          <li><a href="#tc-law" style="color:var(--navy);text-decoration:none;">适用法律与管辖权</a></li>
          <li><a href="#tc-changes" style="color:var(--navy);text-decoration:none;">条款变更</a></li>
          <li><a href="#tc-general" style="color:var(--navy);text-decoration:none;">一般条款</a></li>
        </ol>
      </div>
      <div id="tc-operator" class="privacy-section reveal">
        <h2 class="privacy-heading">1. 网站运营商</h2>
        <p>本网站（<strong>"网站"</strong>）由以下主体运营：</p>
        <div class="privacy-info-box">
          <div class="privacy-info-row"><span class="privacy-info-label">公司</span><span>PT Patimban Global Gateway Terminal（<strong>"PGT"</strong>）</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">地址</span><span>Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270, 印度尼西亚</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">电子邮件</span><span><a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a></span></div>
        </div>
        <p>本使用条款与条件（<strong>"条款"</strong>）管辖您对网站的访问和使用。访问或使用网站即表示您同意受本条款约束。如果您不同意，必须立即停止使用网站。</p>
        <p>本条款仅适用于网站，不影响可能适用于PGT提供港口服务、码头运营或其他商业安排的任何合同条款，此类安排受单独协议约束。</p>
      </div>
      <div id="tc-access" class="privacy-section reveal">
        <h2 class="privacy-heading">2. 网站访问</h2>
        <p>PGT授予您有限的、非排他性的、不可转让的、可撤销的许可，仅为合法信息目的，依据本条款访问和使用网站。</p>
        <p>PGT保留权利，可自行决定且不事先通知地：</p>
        <ul class="privacy-list">
          <li>限制、暂停或终止您对网站全部或任何部分的访问；</li>
          <li>修改、更新或停止网站或其任何功能；</li>
          <li>对任何用户或类别用户的访问施加条件或限制。</li>
        </ul>
        <p>PGT不保证网站将持续可用、无错误或免受中断。<strong>PGT不保证网站对所有形式网络攻击的安全性。</strong>用户负责在自己的系统上维护适当的安全措施，包括最新的防病毒软件和安全的网络访问。</p>
      </div>
      <div id="tc-prohibited" class="privacy-section reveal">
        <h2 class="privacy-heading">3. 禁止行为</h2>
        <p>您同意不以任何以下方式使用网站：</p>
        <h3 class="privacy-subheading">a) 违反适用法律</h3>
        <ul class="privacy-list">
          <li>违反任何印度尼西亚法律、欧盟法规或其他适用的国家或国际法律法规；</li>
          <li>侵犯任何第三方的权利，包括知识产权、隐私权或合同权利；</li>
          <li>构成欺诈、虚假陈述或欺骗性行为。</li>
        </ul>
        <h3 class="privacy-subheading">b) 损害安全或完整性</h3>
        <ul class="privacy-list">
          <li>引入、传输或上传病毒、恶意软件、勒索软件、间谍软件或任何其他恶意或有害代码；</li>
          <li>试图未经授权访问网站、其服务器、数据库或任何连接的系统；</li>
          <li>干扰、破坏或降低网站或其基础设施的性能或可用性；</li>
          <li>未经PGT事先书面同意，使用自动化工具访问或提取网站数据。</li>
        </ul>
        <h3 class="privacy-subheading">c) 滥用内容</h3>
        <ul class="privacy-list">
          <li>未经PGT明确书面授权，复制、抄袭或商业利用本网站的任何内容；</li>
          <li>虚假陈述您与PGT的关联关系或冒充任何PGT代表；</li>
          <li>使用网站内容或材料与PGT的业务活动竞争。</li>
        </ul>
        <p>违反任何禁止行为条款可能导致立即终止访问权限，并可能使您依据适用法律承担民事或刑事责任。</p>
      </div>
      <div id="tc-content" class="privacy-section reveal">
        <h2 class="privacy-heading">4. 内容与准确性</h2>
        <p>本网站发布的信息仅供一般参考。<strong>PGT不对本网站任何信息的准确性、完整性、可靠性或及时性作出任何保证。</strong></p>
        <p>特别是：</p>
        <ul class="privacy-list">
          <li>码头规格、容量数据和运营数据可能随时更改而不另行通知；</li>
          <li>新闻文章和媒体内容反映的是发布时的信息，可能不反映当前情况；</li>
          <li>为回复联系表单提交而提供的信息属于初步性质，不构成具有约束力的要约或商业承诺；</li>
          <li>有关港口开发、容量或时间表的前瞻性陈述基于当前预期，可能发生变化。</li>
        </ul>
        <p>用户在将任何信息用于商业、运营或法律决策之前，应独立核实。如需具有约束力的信息，请直接联系PGT。</p>
      </div>
      <div id="tc-ip" class="privacy-section reveal">
        <h2 class="privacy-heading">5. 知识产权</h2>
        <p>本网站的所有内容是PT Patimban Global Gateway Terminal或其许可方的专有财产，受印度尼西亚和国际知识产权法保护，包括：</p>
        <ul class="privacy-list">
          <li>印度尼西亚《第28/2014号版权法》；</li>
          <li>印度尼西亚《第20/2016号商标和地理标志法》；</li>
          <li>印度尼西亚作为缔约方的适用国际公约。</li>
        </ul>
        <p>未经PGT事先明确书面同意，不得在任何商业背景下复制、抄袭、修改、分发或使用本网站的任何内容。任何未经授权的使用均构成对PGT知识产权的侵犯，可能面临法律诉讼。</p>
        <p>在保留所有版权和所有权声明且明确注明PGT为来源的前提下，允许个人非商业性使用网站内容。</p>
      </div>
      <div id="tc-liability" class="privacy-section reveal">
        <h2 class="privacy-heading">6. 责任限制</h2>
        <p>在适用法律允许的最大范围内，PGT不对以下原因造成的任何损失或损害承担责任：</p>
        <ul class="privacy-list">
          <li>您访问、使用网站或无法访问、使用网站；</li>
          <li>对网站上发布的任何信息或内容的依赖；</li>
          <li>网站或任何服务的任何中断、暂停或终止；</li>
          <li>未经授权访问或更改您的数据传输；</li>
          <li>第三方引入的欺诈性入侵、恶意软件、病毒或其他恶意代码；</li>
          <li>第三方网站提供或链接的任何内容。</li>
        </ul>
        <p>在适用法律不允许完全排除责任的情况下，PGT因与网站相关的总合计责任不超过每项索赔<strong>10,000,000印度尼西亚盾（一千万印度尼西亚盾）</strong>。</p>
        <p><em>责任限制不适用于：(i) 由PGT疏忽造成的死亡或人身伤害；(ii) 欺诈或欺骗性虚假陈述；或 (iii) 任何不能依印度尼西亚适用法律排除的责任。</em></p>
      </div>
      <div id="tc-tariffs" class="privacy-section reveal">
        <h2 class="privacy-heading">7. 关税文件</h2>
        <p>本网站提供下载的关税文件仅<strong>供参考</strong>。这些文件代表标准参考费率，可能随时更改而不另行通知。</p>
        <ul class="privacy-list">
          <li>发布的关税不构成PGT的具有约束力的要约或合同承诺；</li>
          <li>最终适用费率将在单独的商业协议或书面报价中确认；</li>
          <li>除非另有说明，所有关税以美元计价，并须缴纳适用的印度尼西亚税款和政府征费；</li>
          <li>批量折扣和长期合同费率须经单独谈判确定。</li>
        </ul>
        <p>如需准确且具有约束力的关税信息，请通过联系页面直接联系PGT商务团队。</p>
      </div>
      <div id="tc-links" class="privacy-section reveal">
        <h2 class="privacy-heading">8. 第三方链接与外部网站</h2>
        <p>本网站可能包含指向第三方运营的外部网站的链接，包括PGT的股东和业务合作伙伴（Africa Global Logistics、丰田通商株式会社、Samudera Pelabuhan Indonesia）及其他行业组织。</p>
        <p><strong>PGT对任何第三方网站的内容、隐私惯例、安全性或准确性不承担任何控制或责任。</strong>链接的包含并不意味着PGT对被链接网站或其运营商的认可。</p>
        <p>访问第三方网站的用户自行承担风险，应独立审查这些网站的条款和隐私政策。</p>
      </div>
      <div id="tc-privacy" class="privacy-section reveal">
        <h2 class="privacy-heading">9. 隐私与数据保护</h2>
        <p>通过本网站（包括通过联系表单）提交的任何个人数据的收集、处理和存储受<strong>PGT隐私政策</strong>管辖，该政策通过引用并入本条款。</p>
        <p>使用本网站即表示您承认已阅读并理解隐私政策。如需查看完整隐私政策（包括作为数据主体的权利），请<a href="javascript:void(0)" onclick="navigateTo('privacy')" style="color:var(--teal);font-weight:600;">点击此处</a>。</p>
      </div>
      <div id="tc-law" class="privacy-section reveal">
        <h2 class="privacy-heading">10. 适用法律与管辖权</h2>
        <p>本条款以及因本条款或其标的或成立（包括非合同性争议或索赔）而产生的任何争议或索赔，均受<strong>印度尼西亚共和国</strong>法律管辖并依其解释。</p>
        <p><strong>印度尼西亚雅加达</strong>法院对因本条款而产生或与其相关的任何争议或索赔拥有专属管辖权，但不影响PGT在任何有管辖权的司法管辖区寻求禁令或其他紧急救济的权利。</p>
        <p>本条款中的任何内容均不限制PGT在其认为适当的任何司法管辖区提起诉讼以保护其知识产权或其他专有权益的权利。</p>
      </div>
      <div id="tc-changes" class="privacy-section reveal">
        <h2 class="privacy-heading">11. 条款变更</h2>
        <p>PGT保留随时修改本条款的权利。修订后的条款将在本页面发布，并更新"最后更新"日期。您有责任定期查阅本条款。</p>
        <p><strong>在发布修订条款后继续使用网站即表示您接受这些变更。</strong>如果您不同意任何修订的条款，必须立即停止使用网站。</p>
      </div>
      <div id="tc-general" class="privacy-section reveal" style="margin-bottom:64px;">
        <h2 class="privacy-heading">12. 一般条款</h2>
        <p><strong>完整协议。</strong>本条款连同隐私政策及本网站上发布的任何其他法律声明，构成您与PGT之间关于使用本网站的完整协议，并取代与同一主题相关的所有先前通讯、陈述和协议。</p>
        <p><strong>可分割性。</strong>如果本条款的任何条款被有管辖权的法院认定为无效、非法或不可执行，该条款应被视为从本条款中分离，其余条款继续完全有效。</p>
        <p><strong>不放弃。</strong>PGT未能执行本条款的任何权利或条款，不构成对该权利或条款的放弃，除非以书面形式明确确认。</p>
        <p><strong>语言。</strong>本条款以英文起草。如英文版本与任何译文版本之间存在不一致，以英文版本为准。</p>
        <p><strong>联系方式。</strong>有关本条款的问题应发送至：<a href="mailto:info@pgt.id" style="color:var(--teal);font-weight:600;">info@pgt.id</a> — PT Patimban Global Gateway Terminal, Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270, 印度尼西亚。</p>
        <div style="margin-top:32px;padding:20px 24px;background:var(--navy);border-radius:10px;color:rgba(255,255,255,.7);font-size:13px;line-height:1.9;">
          <strong style="color:#fff;">适用法律：</strong>本条款受印度尼西亚法律管辖，包括但不限于《第11/2008号电子信息和交易法》（UU ITE，经《第19/2016号法》修订）和《第8/1999号消费者保护法》（UUPK）。
        </div>
      </div>`;

// ── 7. INJECT JS FUNCTION + HOOK INTO setLangFlat ────────────────────────────
// Escape for JS template literal embedding
const esc = s => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

const legalJsBlock = `
<script id="legal-translations-script">
(function() {
  // Cache EN content on first call
  var _en = { privacy: null, terms: null };

  var legalContent = {
    privacy: {
      id: \`${esc(privBodyID)}\`,
      zh: \`${esc(privBodyZH)}\`
    },
    terms: {
      id: \`${esc(tcBodyID)}\`,
      zh: \`${esc(tcBodyZH)}\`
    }
  };

  window.applyLegalContent = function(lang) {
    var priv = document.getElementById('priv-main-content');
    var tc   = document.getElementById('tc-main-content');
    if (!priv || !tc) return;
    // Save English on first call
    if (!_en.privacy) _en.privacy = priv.innerHTML;
    if (!_en.terms)   _en.terms   = tc.innerHTML;

    if (lang === 'en') {
      priv.innerHTML = _en.privacy;
      tc.innerHTML   = _en.terms;
    } else if (legalContent.privacy[lang]) {
      priv.innerHTML = legalContent.privacy[lang];
      tc.innerHTML   = legalContent.terms[lang];
    }
  };
})();
</script>
`;

// Insert before closing </body>
html = html.replace('</body>', legalJsBlock + '\n</body>');
console.log('Legal JS block injected');

// ── 8. HOOK applyLegalContent INTO setLangFlat ────────────────────────────────
html = html.replace(
  'function setLangFlat(el, lang) {',
  'function setLangFlat(el, lang) {\n  if (window.applyLegalContent) applyLegalContent(lang);'
);
console.log('setLangFlat hooked');

// ── 9. SAVE ───────────────────────────────────────────────────────────────────
fs.writeFileSync('pgt_website.html', html);
console.log('Done. Final file size:', fs.statSync('pgt_website.html').size);
