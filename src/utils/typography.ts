import Typography from 'typography'
import noriegaTheme from 'typography-theme-noriega'

const typography = new Typography({ ...noriegaTheme, baseFontSize: '16px', scaleRatio: 1.5 })

export const { scale, rhythm, options } = typography
export default typography
