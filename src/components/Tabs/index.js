import React from 'react';
import { useCallback } from 'react';
// styles
import { TabContainer, LabelsContainer, Label, ContentContainer } from './styles';

const Tabs = ({ labels, content, currentTab, styles, rest }) => {
  const renderContent = useCallback(() => {
    let Content = null;

    if (currentTab < content.length && currentTab >= 0) {
      Content = content[currentTab];
    } else {
      Content = <p>Sem conteúdo</p>;
    }

    return <Content />;
  }, [content, currentTab]);

  return (
    <TabContainer style={{...styles}} {...rest}>
      <LabelsContainer>
        {labels.map((label, index) => (
          <Label
            key={index}
            className={index === currentTab && 'active'}
            onClick={() => label.action(index)}
          >
            {label.name}
          </Label>
        ))}
      </LabelsContainer>

      <ContentContainer>
        {renderContent()}
      </ContentContainer>
    </TabContainer>
  );
}

export default Tabs;