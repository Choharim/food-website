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
  width: 220px;
  height: 220px;
  margin-bottom: 10px;
  border-radius: 50%;
`;

export const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ItemName = styled.span`
  font-size: 1.3rem;
  font-weight: 550;
  padding-bottom: 5px;
`;

export const ItemPrice = styled.span`
  font-size: 1.1rem;
  padding-bottom: 5px;
`;

export const ItemDescBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: 1px solid #df6c7e;
  border-radius: 3px;
  font-size: 0.7rem;
  padding: 0 2px;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

export const ItemDesc = styled.span`
  border: 2px solid #df6c7e;
  border-radius: 13px;
  padding: 5px;
  width: 110px;
  position: absolute;
  top: 0;
  right: -15px;
`;
