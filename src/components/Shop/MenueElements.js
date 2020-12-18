import styled from "styled-components";

export const ItemsContainer = styled.div`
  margin-top: 100px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
`;

export const ItemContainer = styled.div`
  width: 33.33%;
  height: calc((100% - 100px) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const ItemInfo = styled.div``;
