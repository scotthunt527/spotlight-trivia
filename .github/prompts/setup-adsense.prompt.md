---
agent: agent
description: Swap AdSense placeholder divs for real Google AdSense ad tags
tools:
  - codebase
  - editFiles
---

Replace the AdSense placeholder divs in `index.html` with real Google AdSense ad tags.

## Required information

Before editing the file, confirm you have these values:
- **Publisher ID** — format: `ca-pub-XXXXXXXXXXXXXXXX`
- **Leaderboard ad slot ID** — for the 728×90 banner at the top
- **Rectangle ad slot ID** — for the 300×250 ad at the bottom

If these values haven't been provided in this conversation, ask for them now before making any changes.

## Replacement instructions

### Top leaderboard ad (728×90)

Find this block:
```html
<div class="ad-zone ad-zone-top">
    <div class="ad-placeholder ad-leaderboard">Advertisement</div>
</div>
```

Replace the inner `div.ad-placeholder` with:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=PUBLISHER_ID" crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="PUBLISHER_ID"
     data-ad-slot="LEADERBOARD_SLOT_ID"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

### Bottom rectangle ad (300×250)

Find this block:
```html
<div class="ad-zone ad-zone-bottom" id="bottomAd" style="display:none">
    <div class="ad-placeholder ad-rect">Advertisement (300×250)</div>
</div>
```

Replace the inner `div.ad-placeholder` with:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=PUBLISHER_ID" crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:250px"
     data-ad-client="PUBLISHER_ID"
     data-ad-slot="RECT_SLOT_ID"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

## Rules

- Preserve the outer `.ad-zone` wrapper divs — only replace the inner content.
- Preserve the `id="bottomAd"` and `style="display:none"` on the bottom ad wrapper.
- The AdSense loader script only needs to be included once per page if both ads share the same `ca-pub-*` ID.
- Do not remove the HTML comments explaining the ad zones.
