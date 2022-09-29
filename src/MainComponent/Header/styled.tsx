import styled from 'styled-components'
import { StyledProps } from './types'

export const HeaderWrapper = styled.div`
    background-color: var(--header-color);
    padding: 12px 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3em;
    justify-content: center;
`

export const HeaderButton = styled.button<StyledProps>`
    outline: none;
    background-color: inherit;
    border: none;
    cursor: ${props => props.isSorting ? 'not-allowed' : 'pointer'};
    color: ${props => props.isActive ? "var(--purple)" : props.isSorting ? "var(--red)" : "var(--white)"};

    &:hover{
        color: ${props => props.isSorting ? props.isActive ? "var(--purple)" : "var(--red)" : props.isActive ? "var(--purple)" : "var(--hovered-text-color)"}
    }
`

export const BlackDivider = styled.div`
    width: 5px;
    height: 75px;
    background-color: black;
`

export const SortButton = styled(HeaderButton)<StyledProps>`
    color: ${props => props.isSorting ? "var(--red)" : "white"};
    &:hover{
        color: ${props => props.isSorting? "var(--red)" : "var(--hovered-text-color)"};
    }
`

export const AdjustmentSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
    top: 0;
`

export const AdjustLabel = styled.div<StyledProps>`
   width: 10em;
   font-size: 18px;
   color: ${props => props.isSorting ? "var(--red)" : "white"};
`

export const AdjustElement = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`

export const AdjustInputRange = styled.input`
    background: white none repeat scroll 0% 0%;
     cursor: pointer;
`

export const SortingSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`