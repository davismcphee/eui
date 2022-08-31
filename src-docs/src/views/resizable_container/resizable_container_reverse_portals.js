import React, { useMemo } from 'react';
import { EuiText, EuiResizableContainer } from '../../../../src/components';
import { fake } from 'faker';
import {
  createHtmlPortalNode,
  InPortal,
  OutPortal,
} from 'react-reverse-portal';

const text = (
  <>
    <p>{fake('{{lorem.paragraphs}}')}</p>
    <p>{fake('{{lorem.paragraphs}}')}</p>
    <p>{fake('{{lorem.paragraphs}}')}</p>
  </>
);

export default () => {
  const portalNode1 = useMemo(() => createHtmlPortalNode(), []);
  const portalNode2 = useMemo(() => createHtmlPortalNode(), []);

  return (
    <>
      <InPortal node={portalNode1}>
        <EuiText>
          <div>{text}</div>
          <a href="">Hello world</a>
        </EuiText>
      </InPortal>

      <InPortal node={portalNode2}>
        <EuiText>{text}</EuiText>
      </InPortal>

      <EuiResizableContainer direction="vertical" style={{ height: '400px' }}>
        {(EuiResizablePanel, EuiResizableButton) => (
          <>
            <EuiResizablePanel initialSize={50} minSize="50px">
              <OutPortal node={portalNode1} />
            </EuiResizablePanel>

            <EuiResizableButton />

            <EuiResizablePanel initialSize={50} minSize="50px">
              <OutPortal node={portalNode2} />
            </EuiResizablePanel>
          </>
        )}
      </EuiResizableContainer>
    </>
  );
};
