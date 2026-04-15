const fs = require('fs');
let html = fs.readFileSync('pgt_website.html', 'utf8');

// ── 1. ADDRESS UPDATE (replace all occurrences) ──────────────────────────────
const OLD_ADDR = 'Patimban Seaport, Pusakanagara, Subang Regency, West Java 41256, Indonesia';
const NEW_ADDR = 'Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270, Indonesia';
while (html.includes(OLD_ADDR)) html = html.replace(OLD_ADDR, NEW_ADDR);
console.log('Address updated');

// ── 2. REMOVE OLD PRIVACY PAGE & REPLACE WITH ENHANCED VERSION ───────────────
const privStart = html.indexOf('<!-- ═══════════════════════════════════════════ -->\r\n<!-- PAGE: PRIVACY POLICY');
const privEnd   = html.indexOf('<!-- ═══════════════════════════════════════════ -->', privStart + 10);
if (privStart === -1) { console.log('ERROR: privacy page start not found'); process.exit(1); }
console.log('Privacy page found at', privStart, '→', privEnd);

const NEW_PRIVACY = `<!-- ═══════════════════════════════════════════ -->
<!-- PAGE: PRIVACY POLICY                        -->
<!-- ═══════════════════════════════════════════ -->
<div class="page" id="page-privacy">
  <div class="page-hero" style="background:linear-gradient(135deg,#0A1E3D 0%,#0e3a5c 100%);">
    <div class="container">
      <div class="page-hero-tag">Legal</div>
      <h1>Privacy Policy</h1>
      <p>How PT Patimban Global Gateway Terminal collects, uses, and protects your personal data — in compliance with Indonesian Personal Data Protection Law (UU PDP No. 27/2022) and the EU General Data Protection Regulation (GDPR).</p>
      <p style="font-size:13px;color:rgba(255,255,255,.5);margin-top:12px;">Last updated: April 2025 &nbsp;|&nbsp; Effective date: April 2025</p>
    </div>
  </div>
  <section class="content-section">
    <div class="container" style="max-width:860px;">

      <!-- TOC -->
      <div class="privacy-toc reveal" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:28px 32px;margin-bottom:48px;">
        <h3 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--teal);margin-bottom:16px;">Contents</h3>
        <ol style="columns:2;gap:32px;margin:0;padding-left:20px;font-size:14px;color:var(--navy);">
          <li><a href="#priv-who" style="color:var(--navy);text-decoration:none;">Data Controller</a></li>
          <li><a href="#priv-dpo" style="color:var(--navy);text-decoration:none;">Data Protection Officer</a></li>
          <li><a href="#priv-data" style="color:var(--navy);text-decoration:none;">Data We Collect</a></li>
          <li><a href="#priv-purpose" style="color:var(--navy);text-decoration:none;">Processing Purposes &amp; Legal Bases</a></li>
          <li><a href="#priv-share" style="color:var(--navy);text-decoration:none;">Data Recipients</a></li>
          <li><a href="#priv-transfer" style="color:var(--navy);text-decoration:none;">International Transfers</a></li>
          <li><a href="#priv-retention" style="color:var(--navy);text-decoration:none;">Retention Periods</a></li>
          <li><a href="#priv-security" style="color:var(--navy);text-decoration:none;">Security &amp; Hosting</a></li>
          <li><a href="#priv-cookies" style="color:var(--navy);text-decoration:none;">Cookies &amp; Trackers</a></li>
          <li><a href="#priv-rights" style="color:var(--navy);text-decoration:none;">Your Rights</a></li>
          <li><a href="#priv-contact" style="color:var(--navy);text-decoration:none;">Exercising Your Rights</a></li>
          <li><a href="#priv-changes" style="color:var(--navy);text-decoration:none;">Policy Changes</a></li>
        </ol>
      </div>

      <!-- Intro -->
      <div class="privacy-section reveal" style="background:#f0f9ff;border-left:4px solid var(--teal);padding:20px 24px;border-radius:0 10px 10px 0;margin-bottom:48px;">
        <p style="margin:0;font-size:14px;line-height:1.8;">PT Patimban Global Gateway Terminal is committed to protecting your personal data and respecting your privacy. This policy describes how we collect, use, share, and retain personal data in compliance with <strong>Indonesian Law No. 27/2022 on Personal Data Protection (UU PDP)</strong> and, where applicable, the <strong>EU General Data Protection Regulation (GDPR, Regulation 2016/679)</strong>.</p>
      </div>

      <!-- 1. Data Controller -->
      <div id="priv-who" class="privacy-section reveal">
        <h2 class="privacy-heading">1. Data Controller</h2>
        <p>The data controller responsible for your personal data is:</p>
        <div class="privacy-info-box">
          <div class="privacy-info-row"><span class="privacy-info-label">Legal name</span><span>PT Patimban Global Gateway Terminal</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Registered address</span><span>Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270, Indonesia</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Email</span><span><a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a></span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Website</span><span>https://pgt.id</span></div>
        </div>
        <p>PGT acts as the <strong>data controller</strong> within the meaning of Article 4(7) GDPR and Article 1(4) UU PDP for all personal data processed through this website and in connection with our port operations and commercial activities.</p>
      </div>

      <!-- 2. DPO -->
      <div id="priv-dpo" class="privacy-section reveal">
        <h2 class="privacy-heading">2. Data Protection Officer (DPO)</h2>
        <p>PGT has designated a Data Protection Officer responsible for overseeing compliance with applicable data protection laws. You may contact the DPO directly for any privacy-related queries or to exercise your rights:</p>
        <div class="privacy-info-box">
          <div class="privacy-info-row"><span class="privacy-info-label">Role</span><span>Data Protection Officer, PT Patimban Global Gateway Terminal</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Email</span><span><a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a></span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Address</span><span>Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270, Indonesia</span></div>
        </div>
      </div>

      <!-- 3. Data We Collect -->
      <div id="priv-data" class="privacy-section reveal">
        <h2 class="privacy-heading">3. Personal Data We Collect</h2>
        <p>We collect only the personal data that is adequate, relevant, and limited to what is necessary for the purposes described in this policy. This includes the following categories:</p>

        <h3 class="privacy-subheading">a) Identification &amp; contact details</h3>
        <table class="privacy-table">
          <thead><tr><th>Data element</th><th>Source</th></tr></thead>
          <tbody>
            <tr><td>First name, last name</td><td>Contact form, business correspondence</td></tr>
            <tr><td>Company / organisation name</td><td>Contact form, business correspondence</td></tr>
            <tr><td>Professional email address</td><td>Contact form, business correspondence</td></tr>
            <tr><td>Phone number</td><td>Contact form, business correspondence</td></tr>
            <tr><td>Job title / professional role</td><td>Business correspondence, meetings</td></tr>
          </tbody>
        </table>

        <h3 class="privacy-subheading">b) Professional &amp; operational information</h3>
        <table class="privacy-table">
          <thead><tr><th>Data element</th><th>Source</th></tr></thead>
          <tbody>
            <tr><td>Company governance details (for contractual onboarding)</td><td>Business registration documents</td></tr>
            <tr><td>Cargo / shipment origin and destination countries</td><td>Operational communications</td></tr>
            <tr><td>Volume and nature of cargo (where relevant to quotation)</td><td>Quotation requests</td></tr>
            <tr><td>Subject and content of enquiry</td><td>Contact form</td></tr>
          </tbody>
        </table>

        <h3 class="privacy-subheading">c) Data collected automatically</h3>
        <table class="privacy-table">
          <thead><tr><th>Data element</th><th>Source</th></tr></thead>
          <tbody>
            <tr><td>IP address (anonymised where technically possible)</td><td>Server logs</td></tr>
            <tr><td>Browser type, device type, operating system</td><td>Server logs</td></tr>
            <tr><td>Pages visited, time spent, referrer URL</td><td>Analytics (anonymised)</td></tr>
          </tbody>
        </table>
        <p style="font-size:13px;color:#64748b;margin-top:8px;">We do not collect sensitive categories of personal data (health data, biometric data, financial account details, etc.) through this website.</p>
      </div>

      <!-- 4. Processing Purposes & Legal Bases -->
      <div id="priv-purpose" class="privacy-section reveal">
        <h2 class="privacy-heading">4. Processing Purposes &amp; Legal Bases</h2>
        <p>We process your personal data for the following specific purposes, each supported by a legal basis under both GDPR and UU PDP:</p>

        <table class="privacy-table">
          <thead><tr><th>Purpose</th><th>Data used</th><th>Legal basis (GDPR)</th><th>Legal basis (UU PDP)</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Responding to contact form submissions</strong></td>
              <td>Name, company, email, phone, message</td>
              <td>Consent — Art. 6(1)(a)</td>
              <td>Consent — Pasal 20(1)</td>
            </tr>
            <tr>
              <td><strong>Handling quotation requests</strong></td>
              <td>Name, company, operational details</td>
              <td>Pre-contractual steps — Art. 6(1)(b)</td>
              <td>Contract — Pasal 20(2)(b)</td>
            </tr>
            <tr>
              <td><strong>Commercial follow-up &amp; business development</strong></td>
              <td>Name, company, email, phone</td>
              <td>Legitimate interest — Art. 6(1)(f)</td>
              <td>Legitimate interest — Pasal 20(2)(f)</td>
            </tr>
            <tr>
              <td><strong>Sending requested information &amp; communications</strong></td>
              <td>Name, email</td>
              <td>Consent — Art. 6(1)(a)</td>
              <td>Consent — Pasal 20(1)</td>
            </tr>
            <tr>
              <td><strong>Email communications &amp; updates (non-marketing)</strong></td>
              <td>Name, email</td>
              <td>Legitimate interest — Art. 6(1)(f)</td>
              <td>Legitimate interest — Pasal 20(2)(f)</td>
            </tr>
            <tr>
              <td><strong>Improving website performance &amp; user experience</strong></td>
              <td>Anonymised usage data</td>
              <td>Legitimate interest — Art. 6(1)(f)</td>
              <td>Legitimate interest — Pasal 20(2)(f)</td>
            </tr>
            <tr>
              <td><strong>Fraud prevention &amp; website security</strong></td>
              <td>IP address, technical data</td>
              <td>Legitimate interest — Art. 6(1)(f)</td>
              <td>Legitimate interest — Pasal 20(2)(f)</td>
            </tr>
            <tr>
              <td><strong>Compliance with legal obligations</strong></td>
              <td>As required by applicable law</td>
              <td>Legal obligation — Art. 6(1)(c)</td>
              <td>Legal obligation — Pasal 20(2)(c)</td>
            </tr>
          </tbody>
        </table>
        <p>We will never sell your personal data to third parties, nor use it for unsolicited marketing without your explicit prior consent. Where we rely on <strong>legitimate interest</strong>, we have assessed that our interests are not overridden by your rights and freedoms.</p>
        <p>Where processing is based on <strong>consent</strong>, you have the right to withdraw your consent at any time without affecting the lawfulness of processing carried out prior to withdrawal.</p>
      </div>

      <!-- 5. Data Recipients -->
      <div id="priv-share" class="privacy-section reveal">
        <h2 class="privacy-heading">5. Data Recipients</h2>
        <p>Your personal data may be shared with the following categories of recipients, strictly on a need-to-know basis:</p>
        <table class="privacy-table">
          <thead><tr><th>Recipient</th><th>Purpose</th><th>Safeguard</th></tr></thead>
          <tbody>
            <tr><td><strong>Internal departments</strong> (commercial, operations, legal)</td><td>Handling enquiries and business relationships</td><td>Bound by employment confidentiality obligations</td></tr>
            <tr><td><strong>Web3Forms</strong> (form processing service)</td><td>Transmits contact form submissions to PGT email</td><td>Processed per Web3Forms Privacy Policy; data not retained long-term</td></tr>
            <tr><td><strong>GitHub Pages</strong> (website hosting provider)</td><td>Serving website content and server logs</td><td>GitHub Privacy Statement applies; data stored in the US under GitHub's DPA</td></tr>
            <tr><td><strong>Affiliated entities &amp; shareholders</strong> (AGL, Toyota Tsusho, Samudera)</td><td>Only where necessary for the management of a specific transaction or operation</td><td>Bound by confidentiality agreements; data not shared for their own marketing</td></tr>
            <tr><td><strong>Outsourced service providers</strong> (IT, legal, accounting)</td><td>Supporting PGT's operational and administrative functions</td><td>Governed by data processing agreements with appropriate contractual safeguards</td></tr>
            <tr><td><strong>Government &amp; regulatory authorities</strong></td><td>Where required by Indonesian law, port regulations, or court order</td><td>Disclosed only to the extent strictly required by applicable law</td></tr>
          </tbody>
        </table>
      </div>

      <!-- 6. International Transfers -->
      <div id="priv-transfer" class="privacy-section reveal">
        <h2 class="privacy-heading">6. International Data Transfers</h2>
        <p>Your data is primarily stored and processed in Indonesia. Some transfers outside Indonesia may occur in connection with our service providers (e.g. GitHub Pages hosting in the United States, Web3Forms processing). In all such cases, we ensure that appropriate safeguards are in place:</p>
        <ul class="privacy-list">
          <li><strong>Standard contractual clauses (SCCs)</strong> approved by the European Commission, where EU residents' data is involved;</li>
          <li><strong>European Commission adequacy decisions</strong>, where the destination country has been recognised as providing adequate protection;</li>
          <li><strong>Binding corporate rules</strong> or equivalent safeguards where applicable;</li>
          <li>Compliance with <strong>Chapter VIII of UU PDP No. 27/2022</strong> for all cross-border transfers involving Indonesian personal data.</li>
        </ul>
        <p>You may request information about the specific transfer mechanisms in place by contacting our DPO.</p>
      </div>

      <!-- 7. Retention -->
      <div id="priv-retention" class="privacy-section reveal">
        <h2 class="privacy-heading">7. Data Retention Periods</h2>
        <table class="privacy-table">
          <thead><tr><th>Data category</th><th>Retention period</th></tr></thead>
          <tbody>
            <tr><td>Contact form submissions — no commercial follow-up</td><td>3 years from the date of last contact</td></tr>
            <tr><td>Contact form submissions — commercial relationship established</td><td>Duration of relationship + 5 years</td></tr>
            <tr><td>Quotation requests</td><td>3 years from the date of last contact</td></tr>
            <tr><td>Business correspondence &amp; contracts</td><td>Duration of relationship + 10 years (statutory commercial obligation)</td></tr>
            <tr><td>Email communications</td><td>3 years from last exchange, or until withdrawal of consent</td></tr>
            <tr><td>Website analytics / server logs</td><td>13 months (automatically anonymised thereafter)</td></tr>
            <tr><td>Cookie consent records</td><td>13 months from date of consent</td></tr>
          </tbody>
        </table>
        <p>After the applicable retention period, data is securely and permanently deleted or irreversibly anonymised. We review our retention schedules on a regular basis.</p>
      </div>

      <!-- 8. Security & Hosting -->
      <div id="priv-security" class="privacy-section reveal">
        <h2 class="privacy-heading">8. Security &amp; Hosting</h2>
        <p>PGT implements appropriate technical and organisational security measures to protect your personal data against unauthorised access, accidental loss, destruction, alteration, or disclosure. These include:</p>
        <ul class="privacy-list">
          <li><strong>HTTPS / TLS encryption</strong> for all data transmitted through this website;</li>
          <li><strong>Access controls</strong> limiting staff access to personal data strictly on a need-to-know basis;</li>
          <li><strong>Regular security reviews</strong> of our information systems and third-party provider arrangements.</li>
        </ul>
        <div class="privacy-info-box" style="margin-top:16px;">
          <div class="privacy-info-row"><span class="privacy-info-label">Hosting provider</span><span>GitHub Pages (GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA)</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Data location</span><span>Primarily United States; governed by GitHub's Data Protection Agreement and Privacy Statement</span></div>
        </div>
        <p>No method of transmission over the internet is 100% secure. If you believe your interaction with us has been compromised, please notify us immediately at <a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a>.</p>
      </div>

      <!-- 9. Cookies -->
      <div id="priv-cookies" class="privacy-section reveal">
        <h2 class="privacy-heading">9. Cookies &amp; Trackers</h2>
        <p>Cookies are small text files placed on your device when you visit our website. They help the site function correctly and allow us to understand how it is used. We use only the following categories of cookies:</p>
        <table class="privacy-table">
          <thead><tr><th>Cookie type</th><th>Purpose</th><th>Duration</th><th>Legal basis</th></tr></thead>
          <tbody>
            <tr><td><strong>Strictly necessary</strong></td><td>Essential for website navigation and session management (e.g. language preference)</td><td>Session or up to 12 months</td><td>Not required — operationally necessary</td></tr>
            <tr><td><strong>Analytics (anonymised)</strong></td><td>Understanding aggregate visitor behaviour — no personally identifiable data is stored</td><td>Up to 13 months</td><td>Legitimate interest / Consent</td></tr>
          </tbody>
        </table>
        <p>We do <strong>not</strong> use advertising cookies, cross-site tracking cookies, or any third-party marketing trackers.</p>
        <p>In accordance with guidelines from the Indonesian Ministry of Communication and Digital Affairs (Komdigi) and, where applicable, CNIL guidelines for EU users, you may manage or disable cookies at any time via your browser settings. Note that disabling strictly necessary cookies may impair website functionality.</p>
      </div>

      <!-- 10. Your Rights -->
      <div id="priv-rights" class="privacy-section reveal">
        <h2 class="privacy-heading">10. Your Rights</h2>
        <p>Depending on your jurisdiction, you hold the following rights with respect to your personal data. We are committed to facilitating the exercise of these rights promptly and transparently.</p>
        <div class="privacy-dual-col">
          <div class="privacy-legal-card">
            <div class="privacy-legal-flag">&#127466;&#127482; Under GDPR</div>
            <ul>
              <li><strong>Right of access</strong> — obtain a copy of your personal data (Art. 15)</li>
              <li><strong>Right to rectification</strong> — correct inaccurate data (Art. 16)</li>
              <li><strong>Right to erasure</strong> — "right to be forgotten" (Art. 17)</li>
              <li><strong>Right to restriction</strong> of processing (Art. 18)</li>
              <li><strong>Right to data portability</strong> (Art. 20)</li>
              <li><strong>Right to object</strong> to processing on legitimate interest grounds (Art. 21)</li>
              <li><strong>Right to withdraw consent</strong> at any time (Art. 7(3))</li>
              <li><strong>Right to lodge a complaint</strong> with your national supervisory authority</li>
            </ul>
          </div>
          <div class="privacy-legal-card">
            <div class="privacy-legal-flag">&#127470;&#127465; Under UU PDP No. 27/2022</div>
            <ul>
              <li><strong>Right to information</strong> — know what data is processed and why (Pasal 8)</li>
              <li><strong>Right of access</strong> — obtain your personal data (Pasal 9)</li>
              <li><strong>Right to correction / update</strong> of inaccurate data (Pasal 10)</li>
              <li><strong>Right to deletion</strong> of data no longer necessary (Pasal 11)</li>
              <li><strong>Right to withdraw consent</strong> at any time (Pasal 12)</li>
              <li><strong>Right to object</strong> to automated processing (Pasal 13)</li>
              <li><strong>Right to data portability</strong> (Pasal 14)</li>
              <li><strong>Right to lodge a complaint</strong> with Komdigi (Ministry of Communication and Digital Affairs)</li>
            </ul>
          </div>
        </div>
        <p>To exercise any right, please submit your request in writing to our DPO (see Section 11 below). We will acknowledge receipt and respond within <strong>30 days</strong>. In complex cases we may extend this by a further 30 days, in which case we will notify you. Identity verification may be required before we process your request.</p>
      </div>

      <!-- 11. Exercising Rights -->
      <div id="priv-contact" class="privacy-section reveal">
        <h2 class="privacy-heading">11. Exercising Your Rights &amp; Contact</h2>
        <p>To exercise your rights, ask a question about this policy, or lodge a complaint, please contact our Data Protection Officer:</p>
        <div class="privacy-info-box">
          <div class="privacy-info-row"><span class="privacy-info-label">Contact</span><span>Data Protection Officer, PT Patimban Global Gateway Terminal</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Email</span><span><a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a></span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Address</span><span>Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270, Indonesia</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Response time</span><span>Within 30 days of receipt of a verifiable request</span></div>
        </div>
        <p style="margin-top:16px;">If you are an EU resident and are not satisfied with our response, you have the right to lodge a complaint with your national data protection supervisory authority. If you are an Indonesian resident, you may lodge a complaint with <strong>Komdigi</strong> (Kementerian Komunikasi dan Digital Republik Indonesia).</p>
      </div>

      <!-- 12. Changes -->
      <div id="priv-changes" class="privacy-section reveal" style="margin-bottom:64px;">
        <h2 class="privacy-heading">12. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in applicable law, our technology, or our business operations. Material changes will be indicated by updating the <em>"Last updated"</em> date at the top of this page. We encourage you to review this page periodically.</p>
        <p>Continued use of our website following the publication of any changes constitutes your acceptance of the revised policy.</p>
        <div style="margin-top:32px;padding:20px 24px;background:var(--navy);border-radius:10px;color:rgba(255,255,255,.7);font-size:13px;line-height:1.9;">
          <strong style="color:#fff;">Applicable frameworks:</strong> This policy is governed by and construed in accordance with Indonesian Law No. 27/2022 on Personal Data Protection (UU PDP). Where the data subjects are EU residents, GDPR (Regulation (EU) 2016/679) additionally applies. In the event of conflict between the two frameworks, the stricter provision prevails.
        </div>
      </div>

    </div>
  </section>
</div>
`;

// Replace old privacy page content
html = html.substring(0, privStart) + NEW_PRIVACY + '\r\n' + html.substring(privEnd);
console.log('Privacy page replaced');

// ── 3. INSERT TERMS & CONDITIONS PAGE ────────────────────────────────────────
const tcInsertPoint = html.indexOf('<button class="back-to-top"');

const NEW_TC = `<!-- ═══════════════════════════════════════════ -->
<!-- PAGE: TERMS & CONDITIONS                    -->
<!-- ═══════════════════════════════════════════ -->
<div class="page" id="page-terms">
  <div class="page-hero" style="background:linear-gradient(135deg,#0A1E3D 0%,#0e3a5c 100%);">
    <div class="container">
      <div class="page-hero-tag">Legal</div>
      <h1>Terms &amp; Conditions of Use</h1>
      <p>Please read these Terms carefully before using the PGT website. By accessing or using this website you agree to be bound by these Terms.</p>
      <p style="font-size:13px;color:rgba(255,255,255,.5);margin-top:12px;">Last updated: April 2025 &nbsp;|&nbsp; Effective date: April 2025</p>
    </div>
  </div>
  <section class="content-section">
    <div class="container" style="max-width:860px;">

      <!-- TOC -->
      <div class="privacy-toc reveal" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:28px 32px;margin-bottom:48px;">
        <h3 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--teal);margin-bottom:16px;">Contents</h3>
        <ol style="columns:2;gap:32px;margin:0;padding-left:20px;font-size:14px;color:var(--navy);">
          <li><a href="#tc-operator" style="color:var(--navy);text-decoration:none;">Website Operator</a></li>
          <li><a href="#tc-access" style="color:var(--navy);text-decoration:none;">Access to the Website</a></li>
          <li><a href="#tc-prohibited" style="color:var(--navy);text-decoration:none;">Prohibited Uses</a></li>
          <li><a href="#tc-content" style="color:var(--navy);text-decoration:none;">Content &amp; Accuracy</a></li>
          <li><a href="#tc-ip" style="color:var(--navy);text-decoration:none;">Intellectual Property</a></li>
          <li><a href="#tc-liability" style="color:var(--navy);text-decoration:none;">Limitation of Liability</a></li>
          <li><a href="#tc-tariffs" style="color:var(--navy);text-decoration:none;">Tariff Documents</a></li>
          <li><a href="#tc-links" style="color:var(--navy);text-decoration:none;">Third-Party Links</a></li>
          <li><a href="#tc-privacy" style="color:var(--navy);text-decoration:none;">Privacy &amp; Data Protection</a></li>
          <li><a href="#tc-law" style="color:var(--navy);text-decoration:none;">Governing Law &amp; Jurisdiction</a></li>
          <li><a href="#tc-changes" style="color:var(--navy);text-decoration:none;">Changes to Terms</a></li>
          <li><a href="#tc-general" style="color:var(--navy);text-decoration:none;">General Provisions</a></li>
        </ol>
      </div>

      <!-- 1. Operator -->
      <div id="tc-operator" class="privacy-section reveal">
        <h2 class="privacy-heading">1. Website Operator</h2>
        <p>This website (the <strong>"Website"</strong>) is operated by:</p>
        <div class="privacy-info-box">
          <div class="privacy-info-row"><span class="privacy-info-label">Company</span><span>PT Patimban Global Gateway Terminal (<strong>"PGT"</strong>)</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Address</span><span>Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270, Indonesia</span></div>
          <div class="privacy-info-row"><span class="privacy-info-label">Email</span><span><a href="mailto:info@pgt.id" style="color:var(--teal);">info@pgt.id</a></span></div>
        </div>
        <p>These Terms &amp; Conditions of Use (the <strong>"Terms"</strong>) govern your access to and use of the Website. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, you must immediately cease using the Website.</p>
        <p>These Terms apply solely to the Website and do not affect any contractual terms that may apply to the provision of port services, terminal operations, or other commercial arrangements with PGT, which are governed by separate agreements.</p>
      </div>

      <!-- 2. Access -->
      <div id="tc-access" class="privacy-section reveal">
        <h2 class="privacy-heading">2. Access to the Website</h2>
        <p>PGT grants you a limited, non-exclusive, non-transferable, revocable licence to access and use the Website for lawful informational purposes only, subject to these Terms.</p>
        <p>PGT reserves the right, at its sole discretion and without prior notice, to:</p>
        <ul class="privacy-list">
          <li>Restrict, suspend, or terminate your access to all or any part of the Website;</li>
          <li>Modify, update, or discontinue the Website or any feature thereof;</li>
          <li>Impose conditions or limitations on access for any user or category of users.</li>
        </ul>
        <p>PGT does not guarantee that the Website will be continuously available, error-free, or free from interruptions caused by maintenance, technical failures, or events beyond our reasonable control. <strong>PGT does not guarantee the security of the Website against all forms of cyber-attack.</strong> Users are responsible for maintaining appropriate security measures on their own systems, including up-to-date antivirus software and secure network access.</p>
        <p>Access to the Website is provided free of charge. PGT reserves the right to introduce access restrictions or premium features in the future, subject to prior notice.</p>
      </div>

      <!-- 3. Prohibited Uses -->
      <div id="tc-prohibited" class="privacy-section reveal">
        <h2 class="privacy-heading">3. Prohibited Uses</h2>
        <p>You agree not to use the Website in any manner that:</p>
        <h3 class="privacy-subheading">a) Violates applicable law</h3>
        <ul class="privacy-list">
          <li>Breaches any Indonesian law, EU regulation, or other applicable national or international law or regulation;</li>
          <li>Infringes the rights of any third party, including intellectual property rights, privacy rights, or contractual rights;</li>
          <li>Constitutes fraud, misrepresentation, or deceptive conduct.</li>
        </ul>
        <h3 class="privacy-subheading">b) Compromises security or integrity</h3>
        <ul class="privacy-list">
          <li>Introduces, transmits, or uploads viruses, malware, ransomware, spyware, or any other malicious or harmful code;</li>
          <li>Attempts to gain unauthorised access to the Website, its servers, databases, or any connected systems;</li>
          <li>Interferes with, disrupts, or degrades the performance or availability of the Website or its infrastructure;</li>
          <li>Uses automated tools (crawlers, bots, scrapers) to access or extract data from the Website without PGT's prior written consent.</li>
        </ul>
        <h3 class="privacy-subheading">c) Misuses content</h3>
        <ul class="privacy-list">
          <li>Reproduces, copies, republishes, or commercially exploits any content from this Website without PGT's express written authorisation;</li>
          <li>Misrepresents your affiliation with PGT or impersonates any PGT representative;</li>
          <li>Uses the Website's content or materials to compete with PGT's business activities.</li>
        </ul>
        <p>Breach of any prohibited use provision may result in immediate termination of your access and may expose you to civil or criminal liability under applicable law.</p>
      </div>

      <!-- 4. Content & Accuracy -->
      <div id="tc-content" class="privacy-section reveal">
        <h2 class="privacy-heading">4. Content &amp; Accuracy of Information</h2>
        <p>The information published on this Website is provided for general informational purposes only. While PGT makes reasonable efforts to ensure that content is accurate, complete, and up to date, <strong>PGT does not warrant or guarantee the accuracy, completeness, reliability, or timeliness of any information on this Website.</strong></p>
        <p>In particular:</p>
        <ul class="privacy-list">
          <li>Terminal specifications, capacity figures, and operational data may be subject to change without notice;</li>
          <li>News articles and media content reflect information available at the time of publication and may not reflect current circumstances;</li>
          <li>Information provided in response to contact form submissions is preliminary in nature and does not constitute a binding offer or commercial commitment;</li>
          <li>Any forward-looking statements regarding port development, capacity, or timelines are based on current expectations and are subject to change.</li>
        </ul>
        <p>Users should independently verify any information before relying on it for commercial, operational, or legal decisions. For binding information, please contact PGT directly.</p>
      </div>

      <!-- 5. Intellectual Property -->
      <div id="tc-ip" class="privacy-section reveal">
        <h2 class="privacy-heading">5. Intellectual Property Rights</h2>
        <p>All content on this Website — including but not limited to text, graphics, photographs, videos, maps, infographics, logos, trademarks, trade names, data compilations, and software code — is the exclusive property of PT Patimban Global Gateway Terminal or its licensors and is protected by Indonesian and international intellectual property law, including:</p>
        <ul class="privacy-list">
          <li>Indonesian Law No. 28/2014 on Copyright (Hak Cipta);</li>
          <li>Indonesian Law No. 20/2016 on Trademarks and Geographical Indications;</li>
          <li>Applicable international conventions to which Indonesia is a party.</li>
        </ul>
        <p>No content from this Website may be copied, reproduced, modified, distributed, transmitted, republished, displayed, or used in any commercial context without the prior express written consent of PGT. Any unauthorised use constitutes an infringement of PGT's intellectual property rights and may be subject to legal action.</p>
        <p>Shareholder logos (Africa Global Logistics, Toyota Tsusho Corporation, Samudera Pelabuhan Indonesia) reproduced on this Website remain the property of their respective owners and are used with permission. Users may not reproduce these logos without the express consent of the relevant trademark owner.</p>
        <p>Personal, non-commercial use of Website content is permitted provided that all copyright and proprietary notices are retained and PGT is clearly credited as the source.</p>
      </div>

      <!-- 6. Limitation of Liability -->
      <div id="tc-liability" class="privacy-section reveal">
        <h2 class="privacy-heading">6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, PGT shall not be liable for any loss or damage arising from:</p>
        <ul class="privacy-list">
          <li>Your access to, use of, or inability to access or use the Website;</li>
          <li>Any reliance placed on information or content published on the Website;</li>
          <li>Any interruption, suspension, or termination of the Website or any service;</li>
          <li>Unauthorised access to or alteration of your data transmissions;</li>
          <li>Fraudulent intrusions, malware, viruses, or other malicious code introduced by third parties;</li>
          <li>Any content provided by or linked to third-party websites.</li>
        </ul>
        <p>This limitation applies to all types of loss, whether direct, indirect, incidental, consequential, or punitive, and whether arising in contract, tort (including negligence), strict liability, or any other legal theory.</p>
        <p>Where applicable law does not allow the complete exclusion of liability, PGT's total aggregate liability arising from or in connection with the Website shall not exceed <strong>IDR 10,000,000 (ten million Indonesian Rupiah)</strong> per claim or series of related claims arising from the same cause.</p>
        <p><em>These limitations of liability do not apply to: (i) death or personal injury caused by PGT's negligence; (ii) fraud or fraudulent misrepresentation; or (iii) any liability that cannot be excluded by applicable Indonesian law.</em></p>
        <p>These Terms of Use do not affect the terms and conditions applicable to the provision of terminal and port services by PGT, which are governed by separate contractual arrangements.</p>
      </div>

      <!-- 7. Tariff Documents -->
      <div id="tc-tariffs" class="privacy-section reveal">
        <h2 class="privacy-heading">7. Tariff Documents</h2>
        <p>Tariff documents (Marine Service Tariff, Container Handling Tariff, Terminal Multipurpose Tariff) made available for download on this Website are provided for <strong>informational purposes only</strong>. They represent standard indicative rates and are subject to change without prior notice.</p>
        <ul class="privacy-list">
          <li>Published tariffs do not constitute a binding offer or contractual commitment by PGT;</li>
          <li>Final applicable rates will be confirmed in a separate commercial agreement or written quotation;</li>
          <li>All tariffs are quoted in USD unless otherwise stated, and are subject to applicable Indonesian taxes and government levies;</li>
          <li>Volume discounts and long-term contract rates are available subject to separate negotiation.</li>
        </ul>
        <p>For accurate and binding tariff information, please contact the PGT commercial team directly via the Contact page.</p>
      </div>

      <!-- 8. Third-Party Links -->
      <div id="tc-links" class="privacy-section reveal">
        <h2 class="privacy-heading">8. Third-Party Links &amp; External Websites</h2>
        <p>This Website may contain links to external websites operated by third parties, including PGT's shareholders and business partners (Africa Global Logistics, Toyota Tsusho Corporation, Samudera Pelabuhan Indonesia) and other industry organisations.</p>
        <p>PGT provides these links for convenience only. <strong>PGT has no control over, and accepts no responsibility for, the content, privacy practices, security, or accuracy of any third-party website.</strong> The inclusion of a link does not imply endorsement of the linked website or its operator by PGT.</p>
        <p>Users accessing third-party websites do so at their own risk and should review the terms and privacy policies of those websites independently. PGT is not liable for any loss or damage arising from your use of third-party websites.</p>
      </div>

      <!-- 9. Privacy -->
      <div id="tc-privacy" class="privacy-section reveal">
        <h2 class="privacy-heading">9. Privacy &amp; Data Protection</h2>
        <p>The collection, processing, and storage of any personal data submitted through this Website (including via the Contact form) is governed by PGT's <strong>Privacy Policy</strong>, which is incorporated into these Terms by reference.</p>
        <p>By using this Website, you acknowledge that you have read and understood the Privacy Policy. To view the full Privacy Policy, including your rights as a data subject, <a href="javascript:void(0)" onclick="navigateTo('privacy')" style="color:var(--teal);font-weight:600;">click here</a>.</p>
      </div>

      <!-- 10. Governing Law -->
      <div id="tc-law" class="privacy-section reveal">
        <h2 class="privacy-heading">10. Governing Law &amp; Jurisdiction</h2>
        <p>These Terms, and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims), shall be governed by and construed in accordance with the laws of the <strong>Republic of Indonesia</strong>.</p>
        <p>The courts of <strong>Jakarta, Indonesia</strong> shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms, subject to PGT's right to seek injunctive or other urgent relief in any competent jurisdiction.</p>
        <p>Nothing in these Terms limits PGT's right to bring proceedings in any jurisdiction it deems appropriate to protect its intellectual property rights or other proprietary interests.</p>
      </div>

      <!-- 11. Changes -->
      <div id="tc-changes" class="privacy-section reveal">
        <h2 class="privacy-heading">11. Changes to These Terms</h2>
        <p>PGT reserves the right to revise these Terms at any time. Revised Terms will be published on this page with an updated "Last updated" date. It is your responsibility to review these Terms regularly.</p>
        <p><strong>Your continued use of the Website following the publication of revised Terms constitutes your acceptance of those changes.</strong> If you do not agree with any revised Terms, you must immediately cease using the Website.</p>
        <p>In the event of material changes that significantly affect your rights or obligations, PGT will make reasonable efforts to provide notice (e.g. a banner on the Website home page).</p>
      </div>

      <!-- 12. General -->
      <div id="tc-general" class="privacy-section reveal" style="margin-bottom:64px;">
        <h2 class="privacy-heading">12. General Provisions</h2>
        <p><strong>Entire agreement.</strong> These Terms, together with the Privacy Policy and any other legal notices published on this Website, constitute the entire agreement between you and PGT with respect to your use of the Website and supersede all prior communications, representations, and agreements relating to the same subject matter.</p>
        <p><strong>Severability.</strong> If any provision of these Terms is found by a court of competent jurisdiction to be invalid, unlawful, or unenforceable, that provision shall be deemed severed from these Terms and the remaining provisions shall continue in full force and effect.</p>
        <p><strong>No waiver.</strong> PGT's failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision unless expressly acknowledged in writing.</p>
        <p><strong>Language.</strong> These Terms are drafted in English. In the event of any inconsistency between an English version and any translated version, the English version shall prevail.</p>
        <p><strong>Contact.</strong> Questions about these Terms should be directed to: <a href="mailto:info@pgt.id" style="color:var(--teal);font-weight:600;">info@pgt.id</a> — PT Patimban Global Gateway Terminal, Sentral Senayan III, Bung Karno Sports Complex, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270, Indonesia.</p>
        <div style="margin-top:32px;padding:20px 24px;background:var(--navy);border-radius:10px;color:rgba(255,255,255,.7);font-size:13px;line-height:1.9;">
          <strong style="color:#fff;">Applicable law:</strong> These Terms are governed by Indonesian law, including but not limited to Law No. 11/2008 on Electronic Information and Transactions (UU ITE), as amended by Law No. 19/2016, and Law No. 8/1999 on Consumer Protection (UUPK).
        </div>
      </div>

    </div>
  </section>
</div>
`;

html = html.substring(0, tcInsertPoint) + NEW_TC + '\r\n' + html.substring(tcInsertPoint);
console.log('Terms page inserted');

// ── 4. UPDATE FOOTER — add Terms & Conditions link ───────────────────────────
const oldFooterBottom = '<a href="javascript:void(0)" onclick="navigateTo(\'privacy\')" style="color:rgba(255,255,255,.4);font-size:12px;text-decoration:none;transition:color .3s;" onmouseover="this.style.color=\'var(--gold)\'" onmouseout="this.style.color=\'rgba(255,255,255,.4)\'">Privacy Policy</a>';
const newFooterBottom = '<a href="javascript:void(0)" onclick="navigateTo(\'privacy\')" style="color:rgba(255,255,255,.4);font-size:12px;text-decoration:none;transition:color .3s;" onmouseover="this.style.color=\'var(--gold)\'" onmouseout="this.style.color=\'rgba(255,255,255,.4)\'">Privacy Policy</a>\r\n      <a href="javascript:void(0)" onclick="navigateTo(\'terms\')" style="color:rgba(255,255,255,.4);font-size:12px;text-decoration:none;transition:color .3s;" onmouseover="this.style.color=\'var(--gold)\'" onmouseout="this.style.color=\'rgba(255,255,255,.4)\'">Terms &amp; Conditions</a>';
if (html.includes(oldFooterBottom)) {
  html = html.replace(oldFooterBottom, newFooterBottom);
  console.log('Footer updated with T&C link');
} else {
  console.log('WARNING: footer pattern not found — T&C link not added');
}

// ── 5. SAVE ───────────────────────────────────────────────────────────────────
fs.writeFileSync('pgt_website.html', html);
console.log('Done. Final file size:', fs.statSync('pgt_website.html').size);
