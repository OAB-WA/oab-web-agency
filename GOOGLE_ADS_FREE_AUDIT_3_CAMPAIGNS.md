# Google Ads Setup: Free Audit – 3 Campaigns (Plumbers, HVAC, Electricians)

**Last updated:** 2026-01-30  
*Use this as the master template for new projects; copy and rename for each new client/vertical.*

Step-by-step guide to run three separate Search campaigns, one per vertical, each sending traffic to its dedicated landing page.

---

## 1. Campaign structure (3 campaigns)

**Total budget: $10/day** across all three campaigns. Suggested split:

| Campaign | Goal | Landing page | Daily budget |
|----------|------|--------------|--------------|
| **Free Audit - Plumbers (US)** | Leads | `/free-audit/plumbers` | $4/day |
| **Free Audit - HVAC (US)**   | Leads | `/free-audit/hvac`     | $3/day |
| **Free Audit - Electricians (US)** | Leads | `/free-audit/electricians` | $3/day |

*You can change the split later (e.g. put more on the vertical that converts best).*

**What to expect at $10/day:** Roughly 3–10 clicks per day total (CPC often $2–5 for these keywords). With a 2–5% form conversion rate, expect about **2–8 audit requests per week** while learning. After a few weeks, optimize by shifting budget toward the campaign that gets the best cost per lead.

**Budget realism (real data)**  
Published benchmarks are mostly for *consumer* plumbing (e.g. "plumber near me", "emergency plumber"): CPC often **$7–$35**, cost per lead **$35–$90+**, and at $10/day you’d get only **~0.3–1 click/day** in those keywords. Your campaigns target *B2B/marketing* terms ("plumber website audit", "plumber lead generation", "website for plumbers") — less competition, so CPC can be **lower ($2–$8 plausible)**; there’s no strong public benchmark for these exact terms. **Conservative expectation at $10/day:** 1–4 clicks/day total across all three campaigns, **0.5–2 audit requests per week** in the first 2–4 weeks. The 3–10 clicks and 2–8 leads/week above are achievable if CPC stays low ($2–$4) and conversion 4–5%. Treat **$10/day as a learning/test budget**. For more consistent volume, plan to scale to **$30–50/day+** once you see which vertical converts; some sources suggest **$40–75/day** for "meaningful" results in home-service lead gen (you may need less for B2B audit offers).

| Budget tier   | Daily  | Clicks/day (approx) | Leads/week (approx) | Use case              |
|---------------|--------|----------------------|----------------------|------------------------|
| Test / learn  | $10    | 1–4                  | 0.5–2                | Learning, diagnostics  |
| Light run     | $20–30 | 3–8                  | 1–4                  | Early optimization     |
| Growth        | $40–75+| 8–25+                | 4–12+                | Consistent lead flow   |

**Per-campaign settings (same for all three):**
- **Campaign type:** Search
- **Goal:** Leads
- **Locations:** United States
- **Languages:** English
- **Bid strategy:** Maximize conversions (or Target CPA once you have ~30 conversions)
- **Conversion action:** Use the conversion that fires when someone submits the audit form on that campaign’s landing page (see Conversion tracking below).

---

## 2. Landing page URLs (with UTM)

Use these final URLs in your ads so you can see performance by campaign and ad group in GA4.

**Plumbers:**
```
https://oabwebagency.com/free-audit/plumbers?utm_source=google&utm_medium=cpc&utm_campaign=free-audit-plumbers&utm_content={adgroup}
```

**HVAC:**
```
https://oabwebagency.com/free-audit/hvac?utm_source=google&utm_medium=cpc&utm_campaign=free-audit-hvac&utm_content={adgroup}
```

**Electricians:**
```
https://oabwebagency.com/free-audit/electricians?utm_source=google&utm_medium=cpc&utm_campaign=free-audit-electricians&utm_content={adgroup}
```

*(Replace `{adgroup}` with the actual ad group name if you prefer a fixed value, or leave as dynamic if your setup supports it.)*

---

## 3. Ad groups and keywords (per campaign)

Create **2–3 ad groups per campaign**. Use the keywords below; add your own variants as you see converting search terms.

---

### Campaign 1: Free Audit - Plumbers (US)

**Ad Group 1 – Plumber website / audit**
- `plumber website audit`
- `free plumber website audit`
- `plumber website not getting leads`
- `plumber website not getting calls`
- `plumber website problems`
- `plumber website design`
- `website for plumbers`
- `plumber website that gets calls`
- `plumber lead generation website`

**Ad Group 2 – Plumber SEO / leads**
- `plumber SEO`
- `plumber local SEO`
- `plumber lead generation`
- `how to get more plumbing leads`
- `get more plumbing calls`
- `plumber website optimization`
- `ServiceTitan website integration`
- `Jobber website integration`

**Ad Group 3 – Emergency / results**
- `emergency plumber website`
- `plumber website leads`
- `plumber marketing website`
- `increase plumbing business calls`

**Match types:** Add all of the above as **Exact** `[keyword]` and **Phrase** `"keyword"` first for control. Add **Broad Match** or **Broad Match Modifier** (+keyword) versions later when you need more volume (e.g. after clicking "Update keywords" in campaign diagnostics).

---

### Campaign 2: Free Audit - HVAC (US)

**Ad Group 1 – HVAC website / audit**
- `HVAC website audit`
- `free HVAC website audit`
- `HVAC website not getting leads`
- `HVAC website design`
- `website for HVAC companies`
- `HVAC company website`

**Ad Group 2 – HVAC SEO / leads**
- `HVAC SEO`
- `HVAC local SEO`
- `HVAC lead generation`
- `get more HVAC calls`
- `HVAC website optimization`

**Ad Group 3 – Heating & cooling**
- `heating and cooling website`
- `furnace repair company website`
- `HVAC marketing website`
- `increase HVAC business calls`

**Match types:** Same as Plumbers (Exact + Phrase first).

---

### Campaign 3: Free Audit - Electricians (US)

**Ad Group 1 – Electrician website / audit**
- `electrician website audit`
- `free electrician website audit`
- `electrician website not getting leads`
- `electrician website design`
- `website for electricians`
- `electrical contractor website`

**Ad Group 2 – Electrician SEO / leads**
- `electrician SEO`
- `electrician local SEO`
- `electrician lead generation`
- `get more electrical calls`
- `electrician website optimization`

**Ad Group 3 – Electrical contractor**
- `electrical contractor marketing`
- `electrician website leads`
- `electrician marketing website`
- `increase electrician business calls`

**Match types:** Same as above (Exact + Phrase first).

---

## 4. Ad copy (Responsive Search Ads)

Use 3 headlines and 2 descriptions per ad. Create 2 RSAs per ad group and let Google optimize. Copy is aligned with your landing page (2–3x, free audit, 24 hours, no pitch).

---

### Plumbers – headline & description ideas

**Headlines (pick 3 per ad, rotate):**
- Get 2–3x More Emergency Calls
- Free Plumber Website Audit
- See What's Costing You Leads
- Delivered in 24 Hours
- No Sales Pitch
- Plumber Website Audit

**Descriptions (pick 2 per ad):**
- Find out exactly what's wrong with your plumber website. Delivered in 24 hours. No sales pitch.
- While competitors get calls from Google, you're losing customers. Get your free audit—speed, mobile, SEO.

---

### HVAC – headline & description ideas

**Headlines (pick 3 per ad):**
- Get 2–3x More HVAC Calls
- Free HVAC Website Audit
- See What's Costing You Leads
- Delivered in 24 Hours
- No Sales Pitch
- HVAC Website Audit

**Descriptions (pick 2 per ad):**
- Find out exactly what's wrong with your HVAC website. Delivered in 24 hours. No sales pitch.
- While competitors get calls from Google, you're losing customers. Get your free audit—speed, mobile, SEO.

---

### Electricians – headline & description ideas

**Headlines (pick 3 per ad):**
- Get 2–3x More Electrician Calls
- Free Electrician Website Audit
- See What's Costing You Leads
- Delivered in 24 Hours
- No Sales Pitch
- Electrician Website Audit

**Descriptions (pick 2 per ad):**
- Find out exactly what's wrong with your electrician website. Delivered in 24 hours. No sales pitch.
- While competitors get calls from Google, you're losing customers. Get your free audit—speed, mobile, SEO.

---

## 5. Negative keywords (shared or per campaign)

Add these so you don’t pay for consumer, job, or irrelevant searches. Use a **shared negative keyword list** and attach it to all three campaigns, or add the same list to each campaign.

**Consumer / “find a pro” (people looking FOR a plumber/HVAC/electrician):**
- near me  
- find a plumber  
- find plumber  
- best plumber  
- plumber cost  
- plumber price  
- plumber rates  
- hire a plumber  
- 24 hour plumber  
- emergency plumber  
- plumber repair  
- find HVAC  
- HVAC near me  
- furnace repair near me  
- find electrician  
- electrician near me  
- hire electrician  
- electrician cost  

**Job-seeking:**
- jobs  
- careers  
- hiring  
- salary  
- apply  

**DIY / free stuff / templates:**
- free template  
- DIY  
- how to do it yourself  
- tutorial  
- course  
- certification  

**Other:**
- cheap  
- discount  
- coupon  
- review  
- reddit  
- youtube  

*(Add more as you see irrelevant terms in the Search terms report.)*

**Copy-paste list (one per line for Google Ads):**
```
near me
find a plumber
find plumber
best plumber
plumber cost
plumber price
plumber rates
hire a plumber
24 hour plumber
emergency plumber
plumber repair
find HVAC
HVAC near me
furnace repair near me
find electrician
electrician near me
hire electrician
electrician cost
jobs
careers
hiring
salary
apply
free template
DIY
how to do it yourself
tutorial
course
certification
cheap
discount
coupon
review
reddit
youtube
```

---

## 6. Conversion tracking

Your site already sends GA4 events when the audit form is submitted:
- **Plumbers:** `submit_form` with label `Free Audit Form - Plumbers`
- **HVAC:** `Free Audit Form - HVAC`
- **Electricians:** `Free Audit Form - Electricians`

**In Google Ads:**
1. **Tools & settings → Conversions.**
2. **New conversion action → Import → Google Analytics 4.**
3. Connect your GA4 property and import the relevant “Submit lead form” (or custom) events that correspond to each landing page.
4. In each of the three campaigns, set **Goals → Conversions** and select the right conversion for that campaign’s landing page (Plumbers conversion for plumbers campaign, etc.).
5. Optionally set a **value** per conversion (e.g. $50–$100 per audit request) and use **Count: One** per click.

If you prefer a **Google Ads tag** instead of GA4 import, add a conversion action per campaign and install the tag on each landing page (same pattern as your other landing pages).

---

## 7. Ad extensions (all three campaigns)

**Sitelinks (suggested):**
- **See example audit** → `https://oabwebagency.com/free-audit/example-audit-output`
- **How it works** → `https://oabwebagency.com/free-audit/plumbers` (or hvac/electricians) + `#audit-form` or anchor to process section
- **Case studies** → `https://oabwebagency.com/case-studies`

**Callouts:**
- Delivered in 24 Hours  
- No Sales Pitch  
- See What's Wrong  

**Structured snippets (optional):**
- Type: Services → e.g. Website Audit, SEO Audit, Speed Optimization  

Use the same extension ideas for HVAC and Electricians campaigns; only the final URLs for “How it works” change to the correct landing page.

---

## 8. Pre-launch checklist

- [ ] Three campaigns created (Plumbers, HVAC, Electricians).
- [ ] Locations: United States; Language: English.
- [ ] Budget and bid strategy set per campaign.
- [ ] Ad groups and keywords added (Exact/Phrase).
- [ ] RSAs created per ad group with correct headlines/descriptions.
- [ ] Final URLs use the right landing page + UTM (see section 2).
- [ ] Negative keyword list created and attached to all three campaigns.
- [ ] Conversions imported from GA4 (or Google Ads tag set) and assigned to the right campaign.
- [ ] Sitelinks and callouts added to each campaign.

---

## 9. Post-launch (first 2 weeks)

- [ ] Check Search terms report; add irrelevant terms as negatives.
- [ ] Compare cost per conversion across the three campaigns; adjust budgets if one vertical is clearly better or worse.
- [ ] Pause very low CTR or high-cost keywords; add new keywords from search terms that convert.
- [ ] Let RSAs run; then duplicate and test new headline/description variants.

---

## 10. Why 3 campaigns

- **Separate budgets** so you can spend more on the vertical that converts best.
- **Separate bid strategies** so you can use different target CPAs per vertical later.
- **Clear reporting** (spend, leads, cost per lead per campaign).
- **Easy scaling/pausing** (e.g. scale Plumbers, pause Electricians) without touching the others.

---

## 11. After you make updates

Whenever you change campaigns (keywords, bids, ads, budgets), use this rhythm so the guide stays useful for the next project.

**What to expect after these updates**
- More impressions and possibly more clicks (e.g. after adding keywords or broadening match).
- Campaign diagnostics may clear some warnings after 1–2 weeks; "Bid strategy inactive" often stays until you have enough conversions.
- Cost per click and cost per lead may shift as volume changes; give it 1–2 weeks before judging.

**When to check for results**
- **First check:** 3–5 days after the change (see if impressions/clicks moved).
- **Meaningful check:** 7–14 days (enough data to compare to before; fill in *Result* in Document history if you want).
- **Ongoing:** Use the post-launch checklist (section 9) weekly.

**What to do next**
- Re-open **Campaign diagnostics** and see if the same issues remain or new ones appear.
- If "Targeting fewer searches" / "Not targeting relevant searches" are gone: consider adding broad match versions of top keywords for more volume.
- If conversions are coming in: keep Maximize conversions; once you have ~30 conversions, consider switching to Target CPA.
- Update this doc’s **Document history** (and CHANGELOG_GOOGLE_ADS.md) with the change and, if you like, the *Result* after 1–2 weeks.

Use this doc as your single reference for building and optimizing the three free-audit campaigns.

---

## Document history

- **2026-01-30** – Added **Budget realism (real data)** in section 1: published CPC/CPL for consumer plumbing ($7–35 CPC, $35–90+ CPL); B2B/marketing keywords likely $2–8 CPC; conservative expectation at $10/day (1–4 clicks/day, 0.5–2 leads/week); budget-tier table (Test $10 | Light $20–30 | Growth $40–75+). *Why:* Validate budgets against real data; set realistic expectations for new projects. *Scope:* All campaigns.
- **2026-01-30** – Added 6 keywords to Plumbers campaign (Ad Groups 1 & 2: website/audit, SEO/leads). Clarified match types: add all as Exact + Phrase first; add Broad Match / BMM later for volume. *Why:* Campaign diagnostics: "Not targeting relevant searches" / "Targeting fewer searches". *Scope:* Plumbers only. *What to expect:* More impressions/clicks; some diagnostics may clear in 1–2 weeks. *When to check:* 3–5 days (first look), 7–14 days (meaningful). *What to do next:* Re-check diagnostics; if warnings are gone, consider broad match; update *Result* here after 1–2 weeks. *Result:* (fill in after 7–14 days if desired.)
- **2026-01-29** – Initial setup: 3 campaigns (Plumbers, HVAC, Electricians), landing page URLs with UTM, ad groups and keywords, match-type guidance. *Scope:* All campaigns. *Template:* This doc is the master for new projects.
