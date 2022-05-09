import React from 'react'

export const NodeTypesContext = React.createContext(null)
export const PortTypesContext = React.createContext(null)
export const NodeDispatchContext = React.createContext(null)
export const ConnectionRecalculateContext = React.createContext(null)
export const ContextContext = React.createContext(null)
export const StageContext = React.createContext(null)
export const CacheContext = React.createContext(null)
export const RecalculateStageRectContext = React.createContext<null | (() => void)>(null)
export const EditorIdContext = React.createContext(null)
