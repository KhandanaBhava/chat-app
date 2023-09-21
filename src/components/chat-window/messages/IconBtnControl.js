import { Badge, Icon, IconButton, Tooltip, Whisper } from 'rsuite';

const ConditionalBadge = ({ condition, children }) => {
  return condition ? <Badge content={condition}>{children}</Badge> : children;
};

const IconBtnControl = ({
  isVisible,
  iconName,
  tooltip,
  onClick,
  badgeContent,
  ...props
}) => {
  return (
    <div
      className="ml-2"
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    >
      <ConditionalBadge condition={badgeContent}></ConditionalBadge>
      <Whisper
        placement="top"
        delay={0}
        delayHide={0}
        delayShow={0}
        trigger="hover"
        speaker={<Tooltip>{tooltip}</Tooltip>}
      >
        <IconButton
          {...props}
          onClick={onClick}
          circle
          size="xs"
          icon={<Icon icon={iconName} />}
        />
      </Whisper>
    </div>
  );
};

export default IconBtnControl;
