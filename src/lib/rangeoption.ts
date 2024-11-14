import { isValid, startOfDay, subDays } from "date-fns"
import { formatDateTime } from "./formatters"

export const RANGE_OPTIONS = {
  last_7_days: {
    label: "7 Derniers Jours ",
    startDate: startOfDay(subDays(new Date(), 6)),
    endDate: null,
  },
  last_30_days: {
    label: "30 Derniers Jours ",
    startDate: startOfDay(subDays(new Date(), 29)),
    endDate: null,
  },
  last_90_days: {
    label: "90 Derniers Jours ",
    startDate: startOfDay(subDays(new Date(), 89)),
    endDate: null,
  },
  last_365_days: {
    label: "365 Derniers Jours ",
    startDate: startOfDay(subDays(new Date(), 364)),
    endDate: null,
  },
  all_time: {
    label: "Toutes les données",
    startDate: null,
    endDate: null,
  },
}

export function getRangeOption(range?: string, from?: string, to?: string) {
  if (range == null) {
    const startDate = new Date(from || "")
    const endDate = new Date(to || "")
    if (!isValid(startDate) || !isValid(endDate)) return

    return {
      label: `${formatDateTime(startDate)} - ${formatDateTime(endDate)}`,
      startDate,
      endDate,
    }
  }
  return RANGE_OPTIONS[range as keyof typeof RANGE_OPTIONS]
}