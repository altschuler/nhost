import { GetLabelForTypeOptions, getLabelForType } from '../helpers'
import { Parameter } from '../types'
import FunctionSignatureTypeFragment from './FunctionSignatureTypeFragment'

/**
 * Creates a parameter table documentation fragment for a referenced parameter.
 *
 * @remarks
 * When a function uses a non-primitive type, the parameter's reference will
 * also be displayed on the page.
 *
 * @param parameters - Child parameters of the referenced parameter
 * @param referrerParameter - Referrer parameter
 * @param labelOptions - Options to customize the label
 * @returns Parameter table documentation fragment
 */
export const ParameterTableFragment = (
  parameters: Array<Parameter>,
  referrerParameter?: Parameter,
  labelOptions?: GetLabelForTypeOptions
) => `
| Property | Type | Required | Notes |
| :--- | :--- | :---: | :--- |
${parameters
  .sort((a, b) => (a.flags.isOptional && !b.flags.isOptional ? 1 : -1))
  .map(
    (parameter) =>
      `| <span className="parameter-name">${
        referrerParameter
          ? `<span className="light-grey">${referrerParameter.name}.</span>${parameter.name}`
          : parameter.name
      }</span> | ${
        // function signatures behave slightly differently than other types
        parameter.kindString === 'Method' && parameter.signatures && parameter.signatures.length > 0
          ? `\`${FunctionSignatureTypeFragment(parameter.signatures[0], { wrap: false })}\``
          : parameter.type.type === 'union' || parameter.type.type === 'intersection'
          ? getLabelForType(parameter.type, labelOptions).replace(/\|/gi, '\\|')
          : getLabelForType(parameter.type, labelOptions)
      } | ${parameter.flags.isOptional ? `` : '✔️'} | ${parameter.comment?.shortText || ''}|`
  )
  .join('\n')}
`

export default ParameterTableFragment
