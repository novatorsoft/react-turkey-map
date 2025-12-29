import styled from "@emotion/styled";

export const MapBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MapSvg = styled.svg<{ maxWidth?: string }>`
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
`;
