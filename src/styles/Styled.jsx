import styled from "styled-components"

export const TodosWrapper = styled.div`
  width: 828px;
  padding: 30px 20px;
  margin: 0 auto;
`

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const TodosTitle = styled.div`
  font-family: var(--main-font);
  font-size: 36px;
  font-weight: 700;
  margin-left: 25px;
  color: var(--headline-color);
`

export const CalendarWrapper = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  font-family: var(--main-font);
  font-weight: 700;
`

export const CalendarMonth = styled.div`
  background-color: var(--accent-color);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12px;
  font-size: 8px;
  border-radius: 6px 6px 0 0;
  border: 2px solid var(--accent-color);
  border-bottom: none;
  text-transform: uppercase;
`

export const CalendarDay = styled.div`
  text-align: center;
  font-size: 12px;
  height: 18px;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
  border-radius: 0 0 6px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MenuButtonWrapper = styled.div`
  cursor: pointer;
  height: 32px;
  width: 52px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({active}) => active && `
    box-shadow: 0 -2px 6px 1px rgba(0,0,0,.15);
  `}
` 

export const MenuButton = styled.button`
  position: relative;
  padding: 0;
  border: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--inactive-color);

  &:focus-visible {
    outline: none;
  }

  ${({active}) => active && `
    background-color: var(--active-color);
  `}

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--inactive-color);
    top: 0;

    ${({active}) => active && `
      background-color: var(--active-color);
    `}
  }

  &:before {
    left: -8px;
  }

  &:after {
    right: -8px;
  }
`

export const MenuDropdownList = styled.ul`
  position: absolute;
  display: none;
  right: 0;
  top: 32px;
  width: 120px;
  border-radius 10px 0 10px 10px;
  overflow: hidden;
  box-shadow: 0 0 6px 1px rgba(0,0,0,.15);
  z-index: 2;

  ${({active}) => active && `
    display: block;
  `}
`

export const MenuDropdownItem = styled.li`
  padding: 12px 20px;
  border-bottom: 2px solid var(--border-color);
  width: 100%;
  cursor: pointer;
  user-select: none;
  color: var(--inactive-color);
  background-color: var(--white);

  &:hover {
    color: var(--accent-color);
  }

  &:last-child {
    border-bottom: 2px solid transparent;
  }
`

export const TodoList = styled.ul`
  margin-top: 30px;
`

export const TodoItem = styled.li`
  position: relative;
  padding: 20px 75px;
  font-size: 20px;
  font-family: var(--main-font);
  color: var(--active-color);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    box-shadow: 0 3px 6px 1px rgba(0,0,0,.15);
  }

  ${({active}) => active && `
    text-decoration: line-through;
  `}
`

export const TodoItemCheckbox = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid var(--checkbox-color);
  border-radius: 50%;
  position: absolute;
  left: 20px;
  top: calc(50% - 12px);

  ${({active}) => active && `
    background-color: var(--active-color);
    border: 2px solid var(--active-color);

    &:before,
    &:after {
      content: "";
      background-color: var(--white);
      position: absolute;
      border-radius: 1px;
    }

    &:before {
      width: 6px;
      height: 2px;
      left: 3px;
      top: 10px;
      transform: rotate(45deg)
    }

    &:after {
      width: 12px;
      height: 2px;
      left: 6px;
      top: 9px;
      transform: rotate(-45deg)
    }
  `}
`

export const TodoItemRemoveBtn = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid var(--error-color);
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 12px);
  right: 20px;

  &:before,
  &:after {
    content: "";
    width: 12px;
    height: 2px;
    position: absolute;
    background-color: var(--error-color);
    top: calc(50% - 1px);
    left: 4px;
    border-radius: 2px;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`

export const TodoCreatorWrapper = styled.div`
  position: relative;
`

export const TodoCreateBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  text-align: left;
  position: relative;
  padding: 20px 75px;
  font-size: 20px;
  font-family: var(--main-font);
  color: var(--accent-color);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 6px 1px rgba(0,0,0,.15);
  }

  &:focus-visible {
    outline: none;
  }
`

export const TodoAddPlus = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid var(--accent-color);
  position: absolute;
  top: calc(50% - 12px);
  left: 20px;
  pointer-events: none;

  &:before,
  &:after {
    content: "";
    width: 12px;
    height: 2px;
    border-radius: 2px;
    background-color: var(--accent-color);
    position: absolute;
  }

  &:before {
    top: calc(50% - 1px);
    left: calc(50% - 6px);
  }

  &:after {
    top: calc(50% - 1px);
    left: calc(50% - 6px);
    transform: rotate(90deg);
  }
`

export const TodosCreateInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
`

export const TodosCreateInput = styled.input`
  position: relative;
  display: block;
  width: 450px;
  height: 60px;
  border-radius: 30px;
  border: none;
  font-size: 18px;
  padding: 20px 90px 20px 30px;
  box-shadow: 0 0 6px 1px rgba(0,0,0,.15);

  &:focus-visible {
    outline: none;
  }
`

export const TodosCreateInputCancel = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  top: calc(50% - 12px);
  right: 20px;
  border: 2px solid var(--error-color);
  border-radius: 50%;
  cursor: pointer;
  background: var(--white);
  &:focus-visible {
    outline: none;
  }

  &:before,
  &:after {
    content: "";
    width: 12px;
    height: 2px;
    position: absolute;
    background-color: var(--error-color);
    top: calc(50% - 1px);
    left: 4px;
    border-radius: 2px;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`

export const TodosCreateInputSuccess = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  top: calc(50% - 12px);
  right: 50px;
  border: 2px solid var(--success-color);
  border-radius: 50%;
  cursor: pointer;
  background: var(--white);
  &:focus-visible {
    outline: none;
  }
  
  &:before,
  &:after {
    content: "";
    background-color: var(--success-color);
    position: absolute;
    border-radius: 1px;
  }

  &:before {
    width: 6px;
    height: 2px;
    left: 3px;
    top: 10px;
    transform: rotate(45deg)
  }

  &:after {
    width: 12px;
    height: 2px;
    left: 6px;
    top: 9px;
    transform: rotate(-45deg)
  }
`

export const CustomMessage = styled.div`
  color: var(--error-color);
  font-family: var(--main-font);
  font-size: 18px;
  padding-left: 20px
  ` 