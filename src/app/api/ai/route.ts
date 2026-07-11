import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText, createUIMessageStreamResponse, toUIMessageStream} from 'ai';

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    prompt?: string;
    model?: string;
  } | null;

  const prompt = body?.prompt?.trim();

  if (!prompt) {
    return Response.json({ error: 'Missing prompt' }, { status: 400 });
  }

  const result = streamText({
    model: openrouter.chat(body?.model ?? 'cohere/north-mini-code:free'), // I think this is a pretty good free model but browse through yourself if anything
    prompt,
  });

  return createUIMessageStreamResponse(
    {
        stream: toUIMessageStream({stream: result.stream}),
    }
  );
}