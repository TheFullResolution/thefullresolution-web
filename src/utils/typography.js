import Typography from 'typography'
import noriegaTheme from 'typography-theme-noriega'

const typography = new Typography({ ...noriegaTheme, baseFontSize: 16, scaleRatio: 1.4 })

export const { scale, rhythm, options } = typography
export default typography
