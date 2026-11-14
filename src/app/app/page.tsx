import AppClient from './AppClient';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ start?: string }>;
}) {
  const { start } = await searchParams;
  const initialChoice = start === 'register' || start === 'resume' ? start : undefined;

  return <AppClient initialChoice={initialChoice} />;
}
