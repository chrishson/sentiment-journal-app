type SentimentIconProps = {
  score: number | null;
};

const sentiments = [
  { score: 0.6, emoji: "😊" }, // Very happy
  { score: 0.2, emoji: "🙂" }, // Happy
  { score: -0.2, emoji: "😐" }, // Neutral
  { score: -0.6, emoji: "🙁" }, // Sad
  { score: -Infinity, emoji: "😔" }, // Very sad
];

export default function SentimentIcon({ score }: SentimentIconProps) {
  if (score === null) return null;

  const { emoji } =
    sentiments.find((sentiment) => score > sentiment.score) ||
    sentiments[sentiments.length - 1];

  return <span className="text-2xl">{emoji}</span>;
}
