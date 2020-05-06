import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import esLocale from "date-fns/locale/es";

const localeMap = {
  es: esLocale,
};

export default function Demo() {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap['es']}>
      <KeyboardDatePicker
        okLabel="Ok"
        cancelLabel="Cancelar"
        margin="normal"
        clearLabel="Limpiar"
        id="date-picker-dialog"
        label="Fecha"
        clearable
        format="dd/MM/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  )
}
