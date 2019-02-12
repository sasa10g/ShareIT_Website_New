import React from 'react';
import { css } from '@emotion/core';
import Container from '../../../common/Container';
import Graphic from '../HowWeWorkSection/Graphic';
import ButtonLink from '../../../Buttons/ButtonLink';
import styles from '../../../../utils/styles';

const containerBackStyles = css`
  background-color: #e2e2e2;
  width: 100%;
  padding: 150px 0 90px 0;
`;

const tableStyle = css`
  position: relative;
  z-index: 1;
  margin-top: 100px;
  border-spacing: 0;
  th {
    font-size: 12px;
    h3 {
      border: 0 !important;
      line-height: 1.19;
      letter-spacing: 0.2px;
      font-family: ${styles.fonts.raleway};
      font-size: 32px;
      font-weight: normal;
      text-align: center;
      color: ${styles.colors.textColor};
    }
  }
  .one,
  .two {
    background-color: #e2e2e2;
  }

  tbody tr td {
    border: 2px solid #ededed;
    height: 50px;
    font-family: ${styles.fonts.openSans};
    font-weight: normal;
    font-size: 14px;
    color: ${styles.colors.textColor};
    img {
      padding: 0 17px 0 20px;
    }
  }

  thead:first-child > tr:first-child > th {
    vertical-align: middle;
  }

  .row-fir {
    width: 35%;
    border-top: 0 !important;
    border-right: 0;
    border-left: 0;
    background-color: ${styles.colors.white};
  }

  .row-sec {
    width: 31%;
    border-top: 0 !important;
    border-right: 0;
    text-align: center;
    background-color: #f5f5f5;
    a {
      margin: auto;
      margin-top: 50px;
      margin-bottom: 50px;
      text-decoration: none;
      color: ${styles.colors.white};
      &:hover {
        text-decoration: none;
        color: ${styles.colors.black};
        background: none;
      }
    }
  }

  .row-thr {
    text-align: center;
    border-right: 0;
    border-top: 0;
    background-color: ${styles.colors.white};
    a {
      margin: auto;
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }

  .lst {
    border-bottom: 0px;
  }
`;

const shapeHww = css`
  position: absolute;
  top: 620px;
  left: 1020px;
  z-index: -1;
  background: ${styles.colors.linkActive};
  height: 400px;
  width: 400px;
  border-radius: 50%;
`;

const HowWeWorkTable = () => (
  <div css={containerBackStyles}>
    <Container>
      <table css={tableStyle}>
        <thead>
          <tr>
            <th />
            <th className="one">
              <h3>Time &amp; Materials</h3>
            </th>
            <th className="two">
              <h3>Fixed Price</h3>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="row-fir">
              <Graphic
                text="Project Size"
                imgSrc="/static/how-we-work-icons/project-size.png"
              />
            </td>
            <td className="row-sec">Medium and large</td>
            <td className="row-thr">
              Small and medium, or part of any size project (sprint, milestone,
              project stage)
            </td>
          </tr>
          <tr>
            <td className="row-fir">
              <Graphic
                text="Project Duration"
                imgSrc="/static/how-we-work-icons/project-duration.png"
              />
            </td>
            <td className="row-sec">From one month to any</td>
            <td className="row-thr">From 1 day to 4 months</td>
          </tr>
          <tr>
            <td className="row-fir">
              <Graphic
                text="Requirements for project start"
                imgSrc="/static/how-we-work-icons/requirements-for-project-start.png"
              />
            </td>
            <td className="row-sec">High-level requirements</td>
            <td className="row-thr">Detailed, fixed</td>
          </tr>
          <tr>
            <td className="row-fir">
              <Graphic
                text="Project scope"
                imgSrc="/static/how-we-work-icons/project-scope.png"
              />
            </td>
            <td className="row-sec">
              Implementation during the project process
            </td>
            <td className="row-thr">Completion before the project start</td>
          </tr>
          <tr>
            <td className="row-fir">
              <Graphic
                text="Change requests"
                imgSrc="/static/how-we-work-icons/change-requests.png"
              />
            </td>
            <td className="row-sec">
              Possible during the project implementation
            </td>
            <td className="row-thr">
              Possible after the project completion/within next product version
            </td>
          </tr>
          <tr>
            <td className="row-fir">
              <Graphic
                text="Project start"
                imgSrc="/static/how-we-work-icons/project-start.png"
              />
            </td>
            <td className="row-sec">After the agreement signing</td>
            <td className="row-thr">After project scope approved</td>
          </tr>
          <tr>
            <td className="row-fir">
              <Graphic
                text="Client control of the progress"
                imgSrc="/static/how-we-work-icons/client-control-of-the-progress.png"
              />
            </td>
            <td className="row-sec">Full control of the everyday progress</td>
            <td className="row-thr">
              Low control of the process, only the results of the
              sprint/milestone/project stage
            </td>
          </tr>
          <tr>
            <td className="row-fir">
              <Graphic
                text="Project cost"
                imgSrc="/static/how-we-work-icons/project-cost.png"
              />
            </td>
            <td className="row-sec">
              Based on the time spent, does not include risks
            </td>
            <td className="row-thr">
              Based on the predictable time spent + risks
            </td>
          </tr>
          <tr>
            <td className="row-fir">
              <Graphic
                text="Reports"
                imgSrc="/static/how-we-work-icons/reports.png"
              />
            </td>
            <td className="row-sec">Daily reports</td>
            <td className="row-thr">No</td>
          </tr>
          <tr>
            <td className="row-fir">
              <Graphic
                text="Methodology"
                imgSrc="/static/how-we-work-icons/methodology.png"
              />
            </td>
            <td className="row-sec">Agile (Scrum, Kanban, Scrumban)</td>
            <td className="row-thr">
              Agile (Scrum, Kanban, Scrumban) and non-Agile (Waterfall)
            </td>
          </tr>
          <tr>
            <td className="row-fir lst" />
            <td className="row-sec lst">
              <ButtonLink text="Read More" href="/time-and-materials" />
            </td>
            <td className="row-thr lst">
              <ButtonLink text="Read More" href="/fixed-price" />
            </td>
          </tr>
        </tbody>
        <span css={shapeHww} />
      </table>
    </Container>
  </div>
);

export default HowWeWorkTable;
