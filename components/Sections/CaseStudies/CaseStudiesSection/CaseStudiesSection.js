import React from 'react';
import { css } from '@emotion/core';
import Container from '../../../common/Container';
import Flex from '../../../common/Flex';
import Graphic from './Graphic';
import Input from '../../../Input';
import Select from '../../../Select';
import Section from '../../../common/Section';
import styles from '../../../../utils/styles';
import { innerFlexContainerStyles } from '../../section-styles';

const inputFields = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 6%;
`;

const searchInput = css`
  position: relative;
  input[type='text'] {
    height: 50px;
    border: 0;
    width: 98%;
    padding-left: 2%;
    border-bottom: 1px solid #c9cece;
    border-radius: 0; //Safari rounded edges fix
    font-family: ${styles.fonts.openSans};
    font-size: 14px;
    outline: none;
    color: ${styles.colors.black};
    background: ${styles.colors.white};
  }
  button {
    position: absolute;
    top: 15px;
    right: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
  }
`;

const caseStudiesLine = css`
  margin: 70px 0 50px 0;
  border-bottom: 2px solid #c9cece;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
`;

var caseStudiesSelectItems = [
  {
    text: 'Case1',
  },
  {
    text: 'Case2',
  },
  {
    text: 'Case3',
  },
];

var TagsSelectItems = [
  {
    text: 'Tag1',
  },
  {
    text: 'Tag2',
  },
  {
    text: 'Tag3',
  },
];

const CaseStudiesSection = () => (
  <Section background={styles.colors.containerGray}>
    <Container>
      <div css={inputFields}>
        <div>
          <Select dataList={caseStudiesSelectItems} />
        </div>

        <div>
          <Select dataList={TagsSelectItems} />
        </div>

        <div css={searchInput}>
          <Input type="text" />
          <button>
            <img src="/static/inputSearch.png" alt="" />
          </button>
        </div>
      </div>

      <div css={caseStudiesLine} />

      <ul css={innerFlexContainerStyles}>
        <Graphic text="Case Study Title" imgSrc="/static/ic1.png" href="#" />
        <Graphic text="Case Study Title" imgSrc="/static/ic2.png" href="#" />
        <Graphic text="Case Study Title" imgSrc="/static/ic3.png" href="#" />
      </ul>
      <ul css={innerFlexContainerStyles}>
        <Graphic text="Case Study Title" imgSrc="/static/ic1.png" href="#" />
        <Graphic text="Case Study Title" imgSrc="/static/ic2.png" href="#" />
        <Graphic text="Case Study Title" imgSrc="/static/ic3.png" href="#" />
      </ul>
      <ul css={innerFlexContainerStyles}>
        <Graphic text="Case Study Title" imgSrc="/static/ic1.png" href="#" />
        <Graphic text="Case Study Title" imgSrc="/static/ic2.png" href="#" />
        <Graphic text="Case Study Title" imgSrc="/static/ic3.png" href="#" />
      </ul>
    </Container>
  </Section>
);

export default CaseStudiesSection;
