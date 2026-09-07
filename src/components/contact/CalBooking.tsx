"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_NAMESPACE = "30min";

export function CalBooking() {
  useEffect(() => {
    async function configureCalendar() {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    }

    void configureCalendar();
  }, []);

  return (
    <div className="h-[700px] w-full overflow-hidden sm:h-[760px]">
      <Cal
        namespace={CAL_NAMESPACE}
        calLink="storm-hoogervorst-shiuz1/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
        }}
      />
    </div>
  );
}
