# Google Ads Setup: Free Website – 3 Vertical Campaigns + Optional General

**Last updated:** 2026-02-03  
*Use this for running Search campaigns that send traffic to the free website (full build, application-based) landing pages.*

Step-by-step guide to run three Search campaigns per vertical (Plumbers, HVAC, Electricians), plus an **optional fourth campaign** for the general free-website page (no vertical).

---

## 1. Campaign structure (3 verticals + optional General)

**Total budget (verticals only): $10/day** across the three vertical campaigns. Suggested split:

| Campaign | Goal | Landing page | Daily budget |
|----------|------|--------------|--------------|
| **Free Website - Plumbers (US)** | Leads | `/free-website/plumbers` | $4/day |
| **Free Website - HVAC (US)**   | Leads | `/free-website/hvac`     | $3/day |
| **Free Website - Electricians (US)** | Leads | `/free-website/electricians` | $3/day |

**Optional – General campaign:** If you also want to capture non-vertical-specific searches (e.g. “free website for small business”, “free website for contractors”), add a fourth campaign:

| Campaign | Goal | Landing page | Daily budget |
|----------|------|--------------|--------------|
| **Free Website - General (US)** | Leads | `/free-website` | $2–3/day |

*With General included, total is about $12–13/day; or keep $10 total and split across four campaigns (e.g. $3 / $2.50 / $2.50 / $2). You can change the split later (e.g. put more on the vertical or General that converts best).*

**What to expect at $10/day:** Same pattern as free audit and free redesign: B2B/marketing keywords (“free website for plumbers”, “website built for HVAC”) typically have **lower competition than consumer terms**, so CPC in the **$2–$8** range is plausible. Expect **1–4 clicks/day** early on; with a 2–5% form conversion rate, **0.5–2 applications per week** in the first 2–4 weeks. Treat **$10/day as a learning budget**. Scale to **$30–50/day+** once you see which vertical converts.

| Budget tier   | Daily  | Clicks/day (approx) | Applications/week (approx) | Use case              |
|---------------|--------|------------------------|-----------------------------|------------------------|
| Test / learn  | $10    | 1–4                   | 0.5–2                       | Learning, diagnostics  |
| Light run     | $20–30 | 3–8                   | 1–4                         | Early optimization     |
| Growth        | $40–75+| 8–25+                 | 4–12+                       | Consistent applications |

**Per-campaign settings (same for all three):**
- **Campaign type:** Search
- **Goal:** Leads
- **Locations:** United States
- **Languages:** English
- **Bid strategy:** Maximize conversions (or Target CPA once you have ~30 conversions)
- **Conversion action:** Use the conversion that fires when someone submits the free website application form (see Conversion tracking below).

---

## 2. Landing page URLs (with UTM)

Use these final URLs in your ads so you can see performance by campaign and ad group in GA4.

**Plumbers:**
```
https://oabwebagency.com/free-website/plumbers?utm_source=google&utm_medium=cpc&utm_campaign=free-website-plumbers&utm_content={adgroup}
```

**HVAC:**
```
https://oabwebagency.com/free-website/hvac?utm_source=google&utm_medium=cpc&utm_campaign=free-website-hvac&utm_content={adgroup}
```

**Electricians:**
```
https://oabwebagency.com/free-website/electricians?utm_source=google&utm_medium=cpc&utm_campaign=free-website-electricians&utm_content={adgroup}
```

**General (for the optional 4th campaign):**
```
https://oabwebagency.com/free-website?utm_source=google&utm_medium=cpc&utm_campaign=free-website-general&utm_content={adgroup}
```

*(Replace `{adgroup}` with the actual ad group name if you prefer a fixed value, or leave as dynamic if your setup supports it.)*

---

## 3. Ad groups and keywords (per campaign)

Create **2–3 ad groups per campaign**. Keywords target people looking for a **free website** or **website built for their service business**, not consumer “find a plumber” or “redesign” searches.

---

### Campaign 1: Free Website - Plumbers (US)

**Ad Group 1 – Free website / build**
- `free website for plumbers`
- `free plumber website`
- `website for plumbers free`
- `free business website plumber`
- `free website plumbing company`
- `get a free website for my plumbing business`
- `plumber website built for leads`
- `website built for plumbing business`

**Ad Group 2 – Plumber website / leads**
- `plumber website that gets calls`
- `plumber lead generation website`
- `website for plumbers that convert`
- `plumber website not getting leads`
- `plumber website optimization`
- `get more plumbing leads`
- `plumber marketing website`

**Ad Group 3 – New site / no cost**
- `new plumber website`
- `no cost plumber website`
- `free website for plumbing business`
- `application based free website plumber`

**Match types:** Add all as **Exact** `[keyword]` and **Phrase** `"keyword"` first. Add **Broad Match** later when you need more volume.

---

### Campaign 2: Free Website - HVAC (US)

**Ad Group 1 – Free website / build**
- `free website for HVAC`
- `free HVAC website`
- `website for HVAC companies free`
- `free business website HVAC`
- `free website HVAC company`
- `get a free website for my HVAC business`
- `HVAC website built for leads`
- `website built for HVAC business`

**Ad Group 2 – HVAC website / leads**
- `HVAC website that gets calls`
- `HVAC lead generation website`
- `website for HVAC that converts`
- `HVAC website not getting leads`
- `HVAC website optimization`
- `get more HVAC calls`
- `HVAC marketing website`

**Ad Group 3 – New site / no cost**
- `new HVAC website`
- `no cost HVAC website`
- `free website for HVAC business`
- `application based free website HVAC`

**Match types:** Same as Plumbers (Exact + Phrase first).

---

### Campaign 3: Free Website - Electricians (US)

**Ad Group 1 – Free website / build**
- `free website for electricians`
- `free electrician website`
- `website for electricians free`
- `free business website electrician`
- `free website electrical contractor`
- `get a free website for my electrical business`
- `electrician website built for leads`
- `website built for electrical contractor`

**Ad Group 2 – Electrician website / leads**
- `electrician website that gets calls`
- `electrician lead generation website`
- `website for electricians that convert`
- `electrician website not getting leads`
- `electrician website optimization`
- `get more electrical calls`
- `electrician marketing website`

**Ad Group 3 – New site / no cost**
- `new electrician website`
- `no cost electrician website`
- `free website for electrical contractor`
- `application based free website electrician`

**Match types:** Same as above (Exact + Phrase first).

---

### Campaign 4 (optional): Free Website - General (US)

Use this campaign when you run ads to the general `/free-website` page. Keywords are not vertical-specific (small business, contractors, service business, etc.).

**Ad Group 1 – Free website / small business**
- `free website for small business`
- `free business website`
- `free website for my business`
- `get a free website for my business`
- `free website for service business`
- `free website for contractors`
- `free contractor website`
- `website for small business free`

**Ad Group 2 – Service business / leads**
- `website for service business that gets calls`
- `service business website leads`
- `website built for more calls`
- `business website that gets leads`
- `website for local business leads`
- `lead generation website for business`

**Ad Group 3 – New site / no cost**
- `free website no upfront cost`
- `application based free website`
- `free website for trade business`
- `new business website free`

**Match types:** Same as above (Exact + Phrase first).

---

## 4. Ad copy (Responsive Search Ads)

Use 3 headlines and 2 descriptions per ad. Create 2 RSAs per ad group. Copy aligns with the free website offer: full site built for more calls and booked jobs, no upfront cost, application-based.

---

### Plumbers – headline & description ideas

**Headlines (pick 3 per ad):**
- Get 2–3x More Plumbing Calls
- Free Plumber Website
- Full Site Built for More Leads
- No Upfront Cost
- Application-Based
- Plumber Website That Converts

**Descriptions (pick 2 per ad):**
- We build a full plumber website designed for more calls and booked jobs. No upfront cost; application-based; typically delivered in 1–2 weeks.
- Your plumbing business could get 2–3x more calls. Apply for our free website—full site built for leads, not just looks.

---

### HVAC – headline & description ideas

**Headlines (pick 3 per ad):**
- Get 2–3x More HVAC Calls
- Free HVAC Website
- Full Site Built for More Leads
- No Upfront Cost
- Application-Based
- HVAC Website That Converts

**Descriptions (pick 2 per ad):**
- We build a full HVAC website designed for more calls and booked jobs. No upfront cost; application-based; typically delivered in 1–2 weeks.
- Your HVAC business could get 2–3x more calls. Apply for our free website—full site built for leads, not just looks.

---

### Electricians – headline & description ideas

**Headlines (pick 3 per ad):**
- Get 2–3x More Electrician Calls
- Free Electrician Website
- Full Site Built for More Leads
- No Upfront Cost
- Application-Based
- Electrician Website That Converts

**Descriptions (pick 2 per ad):**
- We build a full electrician website designed for more calls and booked jobs. No upfront cost; application-based; typically delivered in 1–2 weeks.
- Your electrical business could get 2–3x more calls. Apply for our free website—full site built for leads, not just looks.

---

### General – headline & description ideas

Use these when running the optional **Free Website - General (US)** campaign to `/free-website`. No vertical in the copy.

**Headlines (pick 3 per ad):**
- Get 2–3x More Calls
- Free Website for Your Business
- Full Site Built for More Leads
- No Upfront Cost
- Application-Based
- Website That Converts

**Descriptions (pick 2 per ad):**
- We build a full website designed for more calls and booked jobs. For service-based businesses. No upfront cost; application-based; typically delivered in 1–2 weeks.
- Your business could get 2–3x more calls. Apply for our free website—full site built for leads, not just looks.

---

## 5. Negative keywords (shared or per campaign)

Use the same approach as the free audit and free redesign campaigns. Add a **shared negative keyword list** (or copy into each campaign) so you don’t pay for consumer, job, or irrelevant searches.

**Consumer / “find a pro”:**
- near me
- find a plumber
- find plumber
- best plumber
- plumber cost
- plumber price
- hire a plumber
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

---

## 6. Conversion tracking

Your site **already fires a Google Ads conversion** when someone submits the free website application form:

- **Conversion ID:** `AW-17872130458`
- **Conversion label:** `JB8nCJS-oOobEJqjjMpC`
- **Event label** (in gtag) includes the vertical: e.g. `Free Website - plumbers - Application Submitted`, so you can segment by vertical in GA4 or in the conversion name if you import from GA4.

**In Google Ads:**
1. **Tools & settings → Conversions.**
2. If you haven’t already, create (or verify) a **Website** conversion action that matches the tag firing on form submit (e.g. “Free Website – Application”).
3. In each campaign (all three verticals and, if you run it, the General campaign), set **Goals → Conversions** and select this conversion.
4. Optionally set a **value** per conversion (e.g. $100–$300 per qualified application) and **Count: One** per click.

**Important:** Free Website campaigns must **not** use the same conversion goal as Free Audit or Free Redesign. Each offer should optimize to its own conversion so bidding and reporting are correct. Follow 6.1–6.2 below to separate them.

---

### 6.1 Create the Free Website conversion (if it doesn’t exist)

1. In Google Ads: **Goals → Conversions**.
2. Click **+ New conversion action** → **Website**.
3. Choose **Manually add conversion actions** (or use "Use Google Tag Manager or gtag.js" and enter the values below).
4. Enter:
   - **Conversion name:** e.g. `Free Website - Application` (or "Free Website – Plumbers" if you create one per vertical later).
   - **Conversion ID:** `AW-17872130458`
   - **Conversion label:** `JB8nCJS-oOobEJqjjMpC`
5. **Note:** The site uses the same ID/label as Free Redesign but with a different `event_label` (“Free Website - …” vs “Free Redesign - …”). If you already have a single “lead” conversion that captures both, you can use that and segment by label in GA4. In Google Ads, one conversion action = one (ID, label) pair; for separate optimization you’d create a new conversion (new label) and update the site so only the free-website form fires it. For **separate optimization**, create a dedicated “Free Website - Application” conversion and in your tag setup ensure only the free-website form submit fires this conversion (or use a separate label if you add one in code). For simplicity, many accounts create one conversion per offer (Free Audit, Free Redesign, Free Website) and assign each only to its campaigns.
6. Settings: **Value** = Use value from tag (site sends $100) or set a fixed value; **Count** = One; **Click-through window** = 90 days (or your preference).
7. Save. The new conversion will appear under **Goals → Conversions**.

If this conversion already exists (e.g. under "Custom goals"), note its name and go to 6.2.

---

### 6.2 Use only the Free Website conversion for Free Website campaigns

1. Go to **Goals → Conversions** and open the **Summary** (or **Settings**).
2. Find goals that include "Free Audit" or "Free Redesign" conversions. Do **not** add the Free Website conversion to those goals (and do not add Audit/Redesign conversions to Free Website campaigns).
3. Either:
   - **Option A – New goal:** Create a new goal (e.g. "Submit lead form – Free Website") and add **only** the "Free Website - Application" conversion. Then assign this goal to the Free Website campaigns (step 4).
   - **Option B – Campaign-level:** Assign the conversion directly at campaign level (step 4).
4. **Per campaign:** Open **Campaigns** → select **Free Website - Plumbers (US)** (and any other Free Website campaigns).
   - Go to the campaign **Settings** (or use the **Goals** column / **Edit**).
   - Under **Conversion goals** (or **Select conversion actions for this campaign**):
     - **Remove** Free Audit and Free Redesign conversions from this campaign.
     - **Add** only **"Free Website - Application"** (or the name you used in 6.1) as the primary conversion for this campaign.
5. Save. Repeat for **Free Website - HVAC**, **Free Website - Electricians**, and (if you run it) **Free Website - General** when you create those campaigns.

**Result:** Free Audit campaigns use the Free Audit conversion; Free Redesign use the Free Redesign conversion; Free Website campaigns use only the Free Website conversion. Bidding and reporting will be correct for each offer.

---

### 6.3 Quick reference (site already fires this)

- **Conversion ID:** `AW-17872130458` · **Conversion label:** `JB8nCJS-oOobEJqjjMpC`
- Fires on: successful submit of the free website application form (all verticals; vertical is in `event_label`: e.g. `Free Website - plumbers - Application Submitted`).

In each Free Website campaign (verticals and General), set **Goals → Conversions** so the only primary conversion is "Free Website - Application". Do not include Free Audit or Free Redesign conversions in Free Website campaigns.

---

**Optional – separate conversion per vertical:**  
If you want each campaign to optimize to its own conversion (e.g. “Free Website – Plumbers”, “Free Website – HVAC”, “Free Website – Electricians”), create three conversion actions in Google Ads, get three `send_to` values, and add them to the site (e.g. in env or a config) so the form fires the correct `send_to` based on the `vertical` prop. Right now one conversion fires for all verticals with the vertical in the event label; that is enough to run and optimize, and you can add per-vertical conversion actions later if needed.

---

## 7. Ad extensions (all three campaigns)

**Sitelinks (suggested):**
- **How it works** → `https://oabwebagency.com/free-website/plumbers` (or hvac/electricians) + `#audit-form` or anchor to form
- **Case studies** → `https://oabwebagency.com/case-studies`
- **FAQ** → `https://oabwebagency.com/faq`

**Callouts:**
- No Upfront Cost
- Application-Based
- Built for More Calls & Booked Jobs

**Structured snippets (optional):**
- Type: Services → e.g. Website Build, Lead Generation, Conversion Optimization

Use the same extension ideas for HVAC and Electricians; only the “How it works” final URL changes to the correct landing page. For **Free Website - General (US)**, use `https://oabwebagency.com/free-website` for the How it works sitelink.

---

## 8. Pre-launch checklist

- [ ] Three vertical campaigns created (Free Website - Plumbers, HVAC, Electricians).
- [ ] Optional: General campaign created (Free Website - General (US)) and pointed to `/free-website`.
- [ ] Locations: United States; Language: English.
- [ ] Budget and bid strategy set per campaign.
- [ ] Ad groups and keywords added (Exact/Phrase).
- [ ] RSAs created per ad group with correct headlines/descriptions.
- [ ] Final URLs use the right landing page + UTM (see section 2).
- [ ] Negative keyword list created and attached to all campaigns (including General if running).
- [ ] Conversion (Free Website application conversion) assigned to all campaigns; Audit/Redesign conversions removed from these campaigns.
- [ ] Sitelinks and callouts added to each campaign.

---

## 9. Post-launch (first 2 weeks)

- [ ] Check Search terms report; add irrelevant terms as negatives.
- [ ] Compare cost per conversion across campaigns; adjust budgets if one vertical (or General) is clearly better or worse.
- [ ] Pause very low CTR or high-cost keywords; add new keywords from search terms that convert.
- [ ] Let RSAs run; then duplicate and test new headline/description variants.

---

## 10. Why 3 vertical campaigns (+ optional General)

- **Separate budgets** so you can spend more on the vertical (or General) that converts best.
- **Separate bid strategies** so you can use different target CPAs per campaign later.
- **Clear reporting** (spend, applications, cost per application per campaign).
- **Easy scaling/pausing** (e.g. scale Plumbers, pause Electricians or General) without touching the others.
- **General campaign** captures non-vertical intent (“free website for small business”, “free website for contractors”) and sends it to the general `/free-website` page.

---

## 11. After you make updates

**What to expect after these updates**
- More impressions and possibly more clicks after adding keywords or broadening match.
- Campaign diagnostics may clear some warnings after 1–2 weeks; “Bid strategy inactive” often stays until you have enough conversions.
- Cost per click and cost per application may shift as volume changes; give it 1–2 weeks before judging.

**When to check for results**
- **First check:** 3–5 days after the change (see if impressions/clicks moved).
- **Meaningful check:** 7–14 days (enough data to compare to before).
- **Ongoing:** Use the post-launch checklist (section 9) weekly.

**What to do next**
- Re-open **Campaign diagnostics** and see if the same issues remain or new ones appear.
- If conversions are coming in: keep Maximize conversions; once you have ~30 conversions, consider switching to Target CPA.
- Update this doc’s **Document history** (and CHANGELOG_GOOGLE_ADS.md if you use it) with the change and, if you like, the *Result* after 1–2 weeks.

---

## Document history

- **2026-02-03** – Added optional **General** campaign: 4th campaign (Free Website - General (US)) to `/free-website`, with ad groups/keywords (free website for small business, contractors, service business), General ad copy (no vertical), same conversion and extensions; updated title, section 1 (budget table + optional General), section 2 (General URL), checklist, post-launch, and “Why 3 campaigns” → “Why 3 vertical campaigns (+ optional General)”. *Scope:* All free website campaigns including general page. *Why:* Support running Google Ads to the general free-website page, not just verticals.
- **2026-02-03** – Initial version: 3 campaigns (Free Website - Plumbers, HVAC, Electricians), landing page URLs with UTM, ad groups and keywords (free-website/build-focused), ad copy ideas, negative keywords, conversion tracking (existing tag; separate Free Website conversion from Audit/Redesign), extensions, checklists. *Scope:* All free website campaigns. *Why:* Provide a playbook for running Google Ads to the free website offer; conversion already fires on the site.
