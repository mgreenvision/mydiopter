import React from "react";
import styled from "styled-components";

export default function ReportData({ data }) {
  const DataList = data.map((value, index) => {
    return (
      <ReportLine key={index}>
        {index + 1}/{index + 7} BOLD {Math.round(value * 100)}%
      </ReportLine>
    );
  });
  return <ReportList>{DataList}</ReportList>;
}

const ReportList = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: report-data;
  justify-content: center;
  align-items: center;
`;
const ReportLine = styled.div`
  font-family: var(--font-text);
  font-size: var(--text-size-report);
  color: var(--color-grey);
  height: var(--button-small-text-height);
`;
