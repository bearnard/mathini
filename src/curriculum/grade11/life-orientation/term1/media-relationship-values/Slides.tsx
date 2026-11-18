import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "How the media shapes your views",
    content: slide(
      <>
        <Rule>Films, music, adverts, television and social media show many pictures of love, friendship and family. They can teach you about relationships, but they also shape your expectations. Because the media chooses what to show, the picture is often not complete or realistic.</Rule>
        <KeyTable
          title="What the media can do"
          head={["Media", "Possible influence on you"]}
          aria="What the media can do. Films and series: Show romance as perfect or dramatic. Adverts: Link love to buying things. Music videos: Show people as objects or status symbols. Social media: Show only the best moments. News and talk shows: Shape ideas about what is normal."
          rows={[["Films and series", "Show romance as perfect or dramatic"], ["Adverts", "Link love to buying things"], ["Music videos", "Show people as objects or status symbols"], ["Social media", "Show only the best moments"], ["News and talk shows", "Shape ideas about what is normal"]]}
        />
        <Worked
          steps={[
            <>A romantic film shows a couple who never argue. You might start to think that arguments mean that something is wrong.</>,
            <>A social media post shows a perfect holiday, but not the daily life of the couple.</>,
          ]}
        />
        <Mistake>Believing everything in the media is real life. Media is made, edited and chosen to attract attention.</Mistake>
      </>,
    ),
  },
  {
    title: "Stereotypes and pressure",
    content: slide(
      <>
        <Rule>Media often repeats stereotypes, such as men must be tough and women must be pretty. These ideas can put pressure on you to look or act in certain ways to be accepted. Pressure to prove love by sharing private photos or spending money is also a sign of an unhealthy idea about relationships.</Rule>
        <KeyTable
          title="Common media messages and a healthy view"
          head={["Media message", "Healthy view"]}
          aria="Common media messages and a healthy view. Real love means constant attention: Healthy relationships respect space and trust. You must look perfect to be loved: You are valued for who you are. Jealousy shows love: Jealousy can be controlling and needs to be talked about. A boy must lead and a girl must follow: Partners share decisions and respect each other. Everyone has a partner: People are ready at different times."
          rows={[["Real love means constant attention", "Healthy relationships respect space and trust"], ["You must look perfect to be loved", "You are valued for who you are"], ["Jealousy shows love", "Jealousy can be controlling and needs to be talked about"], ["A boy must lead and a girl must follow", "Partners share decisions and respect each other"], ["Everyone has a partner", "People are ready at different times"]]}
        />
        <Worked
          steps={[
            <>An advert suggests that an expensive gift proves love. You remember that care and respect matter more than the price.</>,
            <>You notice that the influencer you follow is paid to promote the product.</>,
          ]}
        />
        <Mistake>Comparing your relationships with a staged picture. Compare them with your own values and with what you know to be healthy.</Mistake>
      </>,
    ),
  },
  {
    title: "Qualities of healthy relationships",
    content: slide(
      <>
        <Rule>Healthy relationships, whether with a friend, a family member or a partner, rest on respect, honesty, trust, good communication and equality. You have rights, such as the right to say no and to be safe, and responsibilities, such as respecting the rights of others. Your values and your culture also shape what you look for.</Rule>
        <KeyTable
          title="Healthy and harmful signs"
          head={["Healthy sign", "Harmful sign"]}
          aria="Healthy and harmful signs. Respect for your decisions: Pressure to do what you do not want. Honest and open talk: Lies or secrets that hurt. Trust and support: Constant checking of your phone. Equal say in decisions: One person always controls. Friends and family stay in your life: You are cut off from other people."
          rows={[["Respect for your decisions", "Pressure to do what you do not want"], ["Honest and open talk", "Lies or secrets that hurt"], ["Trust and support", "Constant checking of your phone"], ["Equal say in decisions", "One person always controls"], ["Friends and family stay in your life", "You are cut off from other people"]]}
        />
        <Worked
          steps={[
            <>A friend respects your choice not to share a password. You see that as a sign of trust.</>,
            <>A partner who checks your phone all the time is showing controlling behaviour.</>,
          ]}
        />
        <Mistake>Staying in a relationship that makes you afraid because the media said it is romantic. Safety and respect come first.</Mistake>
      </>,
    ),
  },
  {
    title: "Think critically about media",
    content: slide(
      <>
        <Rule>You can protect your well-being by asking questions about what you see. Ask who made it, why they made it, what is left out and whether it is realistic. Talk to a trusted adult about what worries you, and limit time on content that makes you feel bad about yourself or your relationships.</Rule>
        <KeyTable
          title="Questions to ask"
          head={["Question", "Why it helps"]}
          aria="Questions to ask. Who made this?: Shows who has an interest in the message. Why was it made?: To entertain, sell or persuade. What is left out?: Shows what the picture hides. Is it realistic?: Compare it with real life. How does it make me feel?: Notice if it harms your self-esteem."
          rows={[["Who made this?", "Shows who has an interest in the message"], ["Why was it made?", "To entertain, sell or persuade"], ["What is left out?", "Shows what the picture hides"], ["Is it realistic?", "Compare it with real life"], ["How does it make me feel?", "Notice if it harms your self-esteem"]]}
        />
        <Worked
          steps={[
            <>You ask what is left out of a series about a perfect couple, and you realise the writers skipped the hard parts of a relationship.</>,
            <>You decide to follow accounts that show real friendships and a range of bodies.</>,
          ]}
        />
        <Mistake>Ignoring how content affects you. If it lowers your self-esteem, change what you watch or follow.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Why is the media picture of love often not realistic?</>,
          <>Name two qualities of a healthy relationship.</>,
          <>What can you ask about a media message?</>,
          <>Who can you talk to if media messages worry you?</>,
        ]}
        answers={[
          <>It is chosen, edited and made to attract attention.</>,
          <>Respect and honesty.</>,
          <>Who made it, why, and what is left out.</>,
          <>A trusted adult.</>,
        ]}
      />,
    ),
  },
];
