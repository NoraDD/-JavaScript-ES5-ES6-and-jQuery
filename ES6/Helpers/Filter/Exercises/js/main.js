// First exercise

const channel = [
  { name: "HBO", premium: true },
  { name: "LIFE", premium: false },
  { name: "Max", premium: true },
  { name: "Cooking channel", premium: false },
  { name: "WOBI", premium: false }
];

const premium = channel.filter(function(item) {
  return item.premium;
});

console.log(premium);

// Second exercise

const channels = [
  { name: "HBO", premium: true },
  { name: "LIFE", premium: false },
  { name: "Max", premium: true },
  { name: "Cooking channel", premium: false },
  { name: "WOBI", premium: false }
];

const user = {
  name: "Francis",
  premium: true,
  premiumChannels: function() {
    const $this = this;
    return channels.filter(function(channel) {
      return channel.premium && $this.premium;
    });
  },
  channels: function() {
    return channels.filter(function(channel) {
      return channel.premium === false;
    });
  }
};

console.log(user.premiumChannels());
