export const dynamic = 'force-dynamic';

export async function GET() {
  return new Response('This website has been removed by its owner.', {
    status: 410,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store, max-age=0'
    }
  });
}
