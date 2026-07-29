export type AnalyticsEvent =
  | "fullscreen_start"
  | "fullscreen_exit"
  | "color_selected"
  | "timer_started"
  | "auto_cycle_started"
  | "copy_link_clicked"
  | "download_clicked"
  | "guide_link_clicked"
  | "related_tool_clicked"
  | "fun_screen_started"
  | "effect_setting_changed"
  | "ad_placeholder_viewed"
  | "affiliate_click"
  | "ad_slot_visible"
  | "affiliate_block_visible"
  | "affiliate_link_clicked"
  | "bulk_page_view"
  | "bulk_cta_click"
  | "bulk_testing_cta_clicked"
  | "contact_reason_bulk_screen_testing"
  | "contact_form_submit"
  | "contact_email_clicked"
  | "checklist_cta_clicked"
  | "email_signup";

export function trackEvent(event: AnalyticsEvent, data?: Record<string, string | number | boolean>) {
  void event;
  void data;
  // Add Google Analytics or another privacy-aware analytics provider here later.
}
