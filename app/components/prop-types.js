import React from 'react';

export const DryLoggedUserPropType = React.PropTypes.shape({
  guid: React.PropTypes.string.isRequired,
  focusedRoom: React.PropTypes.string.isRequired,
}).isRequired;

export const DryUserPropType = React.PropTypes.shape({
  guid: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  avatarURL: React.PropTypes.string.isRequired,
}).isRequired;

export const DryMessagePropType = React.PropTypes.shape({
  guid: React.PropTypes.string.isRequired,
  user: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
}).isRequired;

export const DryChannelPropType = React.PropTypes.shape({
  guid: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['public', 'private']).isRequired,
  name: React.PropTypes.string.isRequired,
}).isRequired;

export const HydratedMessagePropType = React.PropTypes.shape({
  guid: React.PropTypes.string.isRequired,
  user: DryUserPropType,
  text: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  editing: React.PropTypes.bool,
}).isRequired;

export const HydratedRoomPropType = React.PropTypes.shape({
  guid: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['public', 'private']).isRequired,
  name: React.PropTypes.string.isRequired,
  members: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
  messages: React.PropTypes.arrayOf(HydratedMessagePropType).isRequired,
}).isRequired;

export const DryDataPropType = React.PropTypes.shape({
  loggedUser: DryLoggedUserPropType,
  user: React.PropTypes.objectOf(DryUserPropType),
  message: React.PropTypes.objectOf(DryMessagePropType),
  channel: React.PropTypes.objectOf(DryChannelPropType),
}).isRequired;

export const HydratedDataPropType = React.PropTypes.shape({
  loggedUser: DryLoggedUserPropType,
  user: React.PropTypes.objectOf(DryUserPropType),
  message: React.PropTypes.objectOf(DryMessagePropType),
  channel: React.PropTypes.objectOf(DryChannelPropType),
}).isRequired;

const ChannelPropType = React.PropTypes.shape({
  name: React.PropTypes.string.isRequired,
  guid: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
}).isRequired;

export const SessionPropType = React.PropTypes.shape({
  loggedUser: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    guid: React.PropTypes.string.isRequired,
  }).isRequired,
  joinedChannels: React.PropTypes.shape({
    public: React.PropTypes.arrayOf(ChannelPropType).isRequired,
    private: React.PropTypes.arrayOf(ChannelPropType).isRequired,
  }).isRequired,
});

export const EmptyObjectPropType = React.PropTypes.shape({});
