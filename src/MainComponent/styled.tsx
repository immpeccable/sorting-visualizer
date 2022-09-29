import styled from 'styled-components'
import { TableElementProps } from './types'

export const MainWrapper = styled.div`
    
`

export const VisualizationTable = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: center;
    gap: 5px;
`

export const TableElement = styled.div<TableElementProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.color};
`