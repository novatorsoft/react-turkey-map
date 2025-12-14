import styled from "@emotion/styled";

export const TooltipBase = styled.div<{ position: { x: number; y: number } }>`
  position: fixed;
  left: ${({ position }) => position.x + 10}px;
  top: ${({ position }) => position.y - 50}px;
  background-color: white;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  z-index: 1000;
  min-width: 120px;
  border: 1px solid #e0e0e0;
`;
