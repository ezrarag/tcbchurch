# Dev Mode Documentation — Client Suggestion Overlay

Dev Mode enables church leaders and team members to click on the live website, select any visual element, and submit change requests directly to ReadyAimGo.

---

## 5-Step Instructions for Church Leaders

1. **Activate Preview Mode:** Open the website link with `?dev=TOKEN` appended (e.g. `https://www.tcb-church.com/?dev=YOUR_DEV_TOKEN`). A yellow banner will appear at the top confirming Preview Mode is active.
2. **Click "Suggest a Change":** Click the floating dark blue button at the bottom-right of your screen.
3. **Point & Pick:** Move your cursor over any text, photo, or section on the page until an orange box outlines it, then click.
4. **Write Your Note:** Select the category (e.g., Wording, Photo, Service time), type what you want changed, and choose the urgency.
5. **Submit:** Click **Submit Suggestion**. Your request is sent directly to the ReadyAimGo development team!

---

## Known Limits & Security
- Dev Mode suggestions do NOT modify your live website or Firestore database directly.
- The dev token is verified against ReadyAimGo servers and stored securely in `sessionStorage`.
- To turn off Dev Mode, click **Turn Off Preview Mode** in the top banner or visit `?dev=off`.
