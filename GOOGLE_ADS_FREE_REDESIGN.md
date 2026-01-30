# Google Ads Setup: Free Redesign (Case Study Program) – 3 Campaigns (Plumbers, HVAC, Electricians)

**Last updated:** 2026-01-30  
*Use this for running Search campaigns to the free website redesign landing pages. Mirrors the structure of GOOGLE_ADS_FREE_AUDIT_3_CAMPAIGNS.md.*

Step-by-step guide to run three separate Search campaigns, one per vertical, each sending traffic to its dedicated free redesign landing page.

---

## 1. Campaign structure (3 campaigns)

**Total budget: $10/day** across all three campaigns. Suggested split:

| Campaign | Goal | Landing page | Daily budget |
|----------|------|--------------|--------------|
| **Free Redesign - Plumbers (US)** | Leads | `/free-redesign/plumbers` | $4/day |
| **Free Redesign - HVAC (US)**   | Leads | `/free-redesign/hvac`     | $3/day |
| **Free Redesign - Electricians (US)** | Leads | `/free-redesign/electricians` | $3/day |

*You can change the split later (e.g. put more on the vertical that converts best).*

**What to expect at $10/day:** Same B2B/marketing keyword space as the free audit campaigns (website redesign, lead gen, not consumer “find a plumber”). CPC often **$2–$8** for terms like “plumber website redesign”, “free website redesign for contractors”. **Conservative expectation:** 1–4 clicks/day total, **0.5–2 applications per week** in the first 2–4 weeks. Treat **$10/day as a learning/test budget**. Scale to **$30–50/day+** once you see which vertical converts.

| Budget tier   | Daily  | Clicks/day (approx) | Applications/week (approx) | Use case              |
|---------------|--------|----------------------|------------------------------|------------------------|
| Test / learn  | $10    | 1–4                  | 0.5–2                        | Learning, diagnostics  |
| Light run     | $20–30 | 3–8                  | 1–4                          | Early optimization     |
| Growth        | $40–75+| 8–25+                | 4–12+                        | Consistent applications|

**Per-campaign settings (same for all three):**
- **Campaign type:** Search
- **Goal:** Leads
- **Locations:** United States
- **Languages:** English
- **Bid strategy:** Maximize conversions (or Target CPA once you have ~30 conversions)
- **Conversion action:** Use the conversion that fires when someone submits the free redesign application form (see Conversion tracking below).

---

## 2. Landing page URLs (with UTM)

Use these final URLs in your ads so you can see performance by campaign and ad group in GA4.

**Plumbers:**
```
https://oabwebagency.com/free-redesign/plumbers?utm_source=google&utm_medium=cpc&utm_campaign=free-redesign-plumbers&utm_content={adgroup}
```

**HVAC:**
```
https://oabwebagency.com/free-redesign/hvac?utm_source=google&utm_medium=cpc&utm_campaign=free-redesign-hvac&utm_content={adgroup}
```

**Electricians:**
```
https://oabwebagency.com/free-redesign/electricians?utm_source=google&utm_medium=cpc&utm_campaign=free-redesign-electricians&utm_content={adgroup}
```

*(Replace `{adgroup}` with the actual ad group name if you prefer a fixed value, or leave as dynamic if your setup supports it.)*

**General (optional):** If you run a single campaign without vertical split, use:
```
https://oabwebagency.com/free-redesign?utm_source=google&utm_medium=cpc&utm_campaign=free-redesign-general&utm_content={adgroup}
```

---

## 3. Ad groups and keywords (per campaign)

Create **2–3 ad groups per campaign**. Use the keywords below; add your own variants as you see converting search terms.

---

### Campaign 1: Free Redesign - Plumbers (US)

**Ad Group 1 – Plumber website redesign**
- `plumber website redesign`
- `free plumber website redesign`
- `plumber website not getting leads`
- `plumber website not getting calls`
- `website redesign for plumbers`
- `plumber website that gets calls`
- `plumber lead generation website`
- `redesign plumber website`

**Ad Group 2 – Plumber SEO / leads / marketing**
- `plumber SEO`
- `plumber lead generation`
- `how to get more plumbing leads`
- `get more plumbing calls`
- `plumber website optimization`
- `plumber marketing website`

**Ad Group 3 – Case study / free site**
- `free website redesign`
- `website redesign case study`
- `website redesign for service business`
- `new website for plumbing business`

**Match types:** Add all as **Exact** `[keyword]` and **Phrase** `"keyword"` first. Add **Broad Match** or **Broad Match Modifier** later for volume.

---

### Campaign 2: Free Redesign - HVAC (US)

**Ad Group 1 – HVAC website redesign**
- `HVAC website redesign`
- `free HVAC website redesign`
- `HVAC website not getting leads`
- `website redesign for HVAC companies`
- `HVAC company website`
- `HVAC website that gets calls`

**Ad Group 2 – HVAC SEO / leads**
- `HVAC SEO`
- `HVAC lead generation`
- `get more HVAC calls`
- `HVAC website optimization`
- `HVAC marketing website`

**Ad Group 3 – Case study / free site**
- `free website redesign HVAC`
- `website redesign for HVAC`
- `new website for HVAC business`

**Match types:** Same as Plumbers (Exact + Phrase first).

---

### Campaign 3: Free Redesign - Electricians (US)

**Ad Group 1 – Electrician website redesign**
- `electrician website redesign`
- `free electrician website redesign`
- `electrician website not getting leads`
- `website redesign for electricians`
- `electrical contractor website`
- `electrician website that gets calls`

**Ad Group 2 – Electrician SEO / leads**
- `electrician SEO`
- `electrician lead generation`
- `get more electrical calls`
- `electrician website optimization`
- `electrician marketing website`

**Ad Group 3 – Case study / free site**
- `free website redesign electrician`
- `website redesign for electrical contractors`
- `new website for electrician business`

**Match types:** Same as above (Exact + Phrase first).

---

## 4. Ad copy (Responsive Search Ads)

Use 3 headlines and 2 descriptions per ad. Create 2 RSAs per ad group. Copy is aligned with the landing page: free redesign, more calls and booked jobs, application-based, no upfront cost.

---

### Plumbers – headline & description ideas

**Headlines (pick 3 per ad):**
- Your Plumber Site Could Get 2–3x More Calls
- Free Plumber Website Redesign
- We Build It Free—You Get More Calls
- Application-Based, No Upfront Cost
- Plumber Website Built for Leads
- More Plumbing Calls & Booked Jobs

**Descriptions (pick 2 per ad):**
- New site built for more plumbing calls and booked jobs. We replace yours. No upfront cost; application-based.
- Apply for the free redesign. We build a new plumber site designed to get you more calls and booked jobs.

---

### HVAC – headline & description ideas

**Headlines (pick 3 per ad):**
- Your HVAC Site Could Get 2–3x More Calls
- Free HVAC Website Redesign
- We Build It Free—You Get More Calls
- Application-Based, No Upfront Cost
- HVAC Website Built for Leads
- More HVAC Calls & Booked Jobs

**Descriptions (pick 2 per ad):**
- New site built for more HVAC calls and booked jobs. We replace yours. No upfront cost; application-based.
- Apply for the free redesign. We build a new HVAC site designed to get you more calls and booked jobs.

---

### Electricians – headline & description ideas

**Headlines (pick 3 per ad):**
- Your Electrician Site Could Get 2–3x More Calls
- Free Electrician Website Redesign
- We Build It Free—You Get More Calls
- Application-Based, No Upfront Cost
- Electrician Website Built for Leads
- More Electrician Calls & Booked Jobs

**Descriptions (pick 2 per ad):**
- New site built for more electrician calls and booked jobs. We replace yours. No upfront cost; application-based.
- Apply for the free redesign. We build a new electrician site designed to get you more calls and booked jobs.

---

## 5. Negative keywords (shared or per campaign)

Use the same negative keyword list as the free audit campaigns (consumer “find a pro”, job-seeking, DIY, etc.). Attach the list to all three free redesign campaigns.

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

The site **already fires a Google Ads conversion** when someone submits the free redesign application form:

- **Conversion ID (send_to):** `AW-17872130458/JB8nCJS-oOobEJqjjMpC`
- **When it fires:** On successful form submit (application received).
- **Event label:** Includes the vertical, e.g. `Free Redesign - plumbers - Application Submitted`, `Free Redesign - hvac - Application Submitted`, so you can segment by vertical in reports.

**In Google Ads:**
1. **Tools & settings → Conversions.** Confirm this conversion action exists and is set to **Count: One**, and that **Primary goal** or **Secondary goal** is set so the campaigns can use it.
2. In each of the three campaigns, set **Goals → Conversions** and select this conversion action.
3. Optionally set a **value** per conversion (e.g. $100–$300 per application, as the offer is high-value) and use **Click-through window** 30 days.

**Optional (better optimization per vertical):** Create **three separate conversion actions** in Google Ads (e.g. “Free Redesign - Plumbers”, “Free Redesign - HVAC”, “Free Redesign - Electricians”) and update the site to fire the corresponding `send_to` on each landing page. Then assign each campaign to its own conversion. Until then, one conversion with event_label segmentation is sufficient.

---

## 7. Ad extensions (all three campaigns)

**Sitelinks (suggested):**
- **See case studies** → `https://oabwebagency.com/case-studies`
- **How it works** → `https://oabwebagency.com/free-redesign/plumbers` (or hvac/electricians) + `#audit-form`
- **FAQ** → `https://oabwebagency.com/faq`

**Callouts:**
- No Upfront Cost  
- Application-Based  
- Built for More Calls & Booked Jobs  

**Structured snippets (optional):**
- Type: Services → e.g. Website Redesign, Lead Generation, Case Study Program  

Use the same extension ideas for HVAC and Electricians; only the “How it works” final URL changes to the correct landing page per campaign.

---

## 8. Pre-launch checklist

- [ ] Three campaigns created (Free Redesign - Plumbers, HVAC, Electricians).
- [ ] Locations: United States; Language: English.
- [ ] Budget and bid strategy set per campaign.
- [ ] Ad groups and keywords added (Exact/Phrase).
- [ ] RSAs created per ad group with correct headlines/descriptions.
- [ ] Final URLs use the right landing page + UTM (see section 2).
- [ ] Negative keyword list created and attached to all three campaigns.
- [ ] Conversion action confirmed and assigned to all three campaigns.
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
- **Clear reporting** (spend, applications, cost per application per campaign).
- **Easy scaling/pausing** (e.g. scale Plumbers, pause Electricians) without touching the others.

---

## 11. After you make updates

**What to expect after these updates**
- More impressions and possibly more clicks after adding keywords or broadening match.
- Campaign diagnostics may clear after 1–2 weeks; “Bid strategy inactive” often stays until you have enough conversions.
- Cost per click and cost per application may shift as volume changes; give it 1–2 weeks before judging.

**When to check for results**
- **First check:** 3–5 days after the change (see if impressions/clicks moved).
- **Meaningful check:** 7–14 days (enough data to compare; fill in *Result* in Document history if you want).
- **Ongoing:** Use the post-launch checklist (section 9) weekly.

**What to do next**
- Re-open **Campaign diagnostics** and see if the same issues remain or new ones appear.
- If conversions are coming in: keep Maximize conversions; once you have ~30 conversions, consider switching to Target CPA.
- Update this doc’s **Document history** (and CHANGELOG_GOOGLE_ADS.md) with the change and, if you like, the *Result* after 1–2 weeks.

Use this doc as your single reference for building and optimizing the three free-redesign campaigns.

---

## Document history

- **2026-01-30** – Initial version: 3 campaigns (Plumbers, HVAC, Electricians) for free redesign landing pages; landing URLs with UTM; ad groups and keywords; conversion tracking (existing tag AW-17872130458/JB8nCJS-oOobEJqjjMpC); ad copy ideas; budget expectations; pre- and post-launch checklists. *Scope:* All campaigns. *Template:* Mirrors GOOGLE_ADS_FREE_AUDIT_3_CAMPAIGNS.md.
