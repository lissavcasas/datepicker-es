import format from "date-fns/format";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

class EsLocalizedUtils extends DateFnsUtils {
  getCalendarHeaderText(date) {
    return format(date, "LLLL", { locale: esLocale});
  }
  getDatePickerHeaderText(date) {
    return format(date, "d MMM yyyy", { locale: esLocale});
  }
}

function Demo() {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <MuiPickersUtilsProvider utils={EsLocalizedUtils} locale={esLocale}>
      <DatePicker
        label="Fecha"
        value={selectedDate}
        onChange={handleDateChange}
        format="d MMM yyyy"
        cancelLabel="cancelar"
        clearLabel="Limpiar"
        clearable
      />
    </MuiPickersUtilsProvider>
  );
}

export default Demo;