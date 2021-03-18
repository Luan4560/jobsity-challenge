import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  .DayPicker {
    border-radius: 0px;

  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: transparent;
    border-radius: 0px;
  }

  .DayPicker{
    width: 100%;

  }
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-NavButton--next {
    display: none;
  }

  .DayPicker-Month {
    margin: 16px 0 0 0;
    padding: 16px;
    background-color: var(--background);

  }

  .DayPicker-WeekdaysRow {
    background-color: var(--blue);

    abbr {
      color: #fff;
      font-weight: bold;
      font-size: 1rem;
    }
  }

  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;
    color: transparent;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Day {
    width: 150px;
    height: 150px;
    border: 1px solid var(--blue);
    border-radius: 0;
    display: table-cell;
    padding: 0.5em;
    text-align: left;
    vertical-align: 0;
    cursor: pointer;
}

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    color: #3e3b47;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: var(--blue) !important;
    background: #eee!important;
    font-weight: 600;
    font-size: 1.2rem;
  }

  .DayPicker-Day--selected {
    background: #ddd !important;
    border-radius: 0px;
    color: #232129 !important;
  }
`

export const ContentDay = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    background-color: transparent;

  }
`
export const Reminder = styled.div`
  width: 100%;

  .content-box-remider-one {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    width: 100%;
    margin: 5px 5px;
    border: 0;
    padding: 5px;
    border-radius: 0.5rem;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

  }

  button {
    margin: 0 5px;
    background: var(--blue);
    border-radius: 0.5rem;
    padding: 0.3rem;
    width: 100%;

    color: #fff;
  }
}
`

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 600;
    font-size: 2rem;
    color: var(--blue);
  }

  input {
    width: 100%;
    padding: 0.4rem;
    margin: 5px;
  }

  .btn {
    width:100%;
    display: grid;
    grid-template-columns: (1fr 1fr);
    gap: 1rem;


    button {
      padding: 0.5rem;
      background: var(--blue);
      border:0;
      color: #fff;
      font-weight: 600;

      &:last-child {
      background: var(--red);
    }
  }
}


`
