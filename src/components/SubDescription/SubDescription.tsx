import styled from 'styled-components'

export const SubDescription = ({
	text,
	fontSize,
	withMarginTop = true,
}: {
	text: string
	fontSize?: number
	withMarginTop?: boolean
}) => {
	return (
		<StyledDescription withMarginTop={withMarginTop} fontSize={fontSize}>
			{text}
		</StyledDescription>
	)
}

const StyledDescription = styled.p<{
	fontSize?: number
	withMarginTop: boolean
}>`
	font-size: ${({ fontSize }) => (fontSize && `${fontSize}px`) || '22.5px'};
	font-weight: 500;
	color: #000000;
	margin-top: ${({ withMarginTop }) => (withMarginTop ? '24.93px' : 0)};
	margin-bottom: 24px;

	@media only screen and (max-width: 768px) {
		font-size: 18px;
	}
	@media only screen and (max-width: 600px) {
		margin-top: 0px;
		margin-bottom: 12px;
	}
`
