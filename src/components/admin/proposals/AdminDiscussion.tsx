'use client';
// The owner's view of a discussion thread, with a button to take down any comment (moderation hygiene). Teachers and moderators only wrote it.
import { useEffect, useState } from 'react';
import { postJson, when } from '../reviews/api';

interface Comment { id: string; author: string; body: string; createdAt: number; removed: boolean }

export default function AdminDiscussion({ target }: { target: { question: string } | { proposal: string } }) {
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [err, setErr] = useState('');
  const qs = 'question' in target ? `question=${target.question}` : `proposal=${target.proposal}`;
  const load = () => { void fetch(`/api/admin/comments?${qs}`, { cache: 'no-store' }).then(async (r) => setComments(r.ok ? ((await r.json()) as { comments: Comment[] }).comments : [])).catch(() => setComments([])); };
  useEffect(load, [qs]); // eslint-disable-line react-hooks/exhaustive-deps
  const remove = async (id: string) => {
    if (!window.confirm('Take this comment down? Its text is hidden from everyone; the owner action is recorded.')) return;
    setErr('');
    const r = await postJson(`/api/admin/comments/${id}/remove`, 'comment-remove', {});
    if (r.ok) load(); else setErr(r.failure.error);
  };
  return (
    <div aria-label="Discussion" style={{ marginTop: 8, fontSize: 14 }}>
      <strong>Discussion</strong>
      {comments === null && <p>Loading…</p>}
      {comments && comments.length === 0 && <p className="admin-muted">No comments.</p>}
      <ul style={{ listStyle: 'none', margin: '4px 0 0', padding: 0, display: 'grid', gap: 6 }}>
        {comments?.map((c) => (
          <li key={c.id} style={{ overflowWrap: 'anywhere' }}>
            <span style={{ fontWeight: 600 }}>{c.author}</span> <span className="admin-muted" style={{ fontSize: 12 }}>{when(c.createdAt)}</span>
            <div>{c.removed ? <em className="admin-muted">Removed</em> : c.body}</div>
            {!c.removed && <button type="button" className="admin-btn-danger" onClick={() => void remove(c.id)}>Remove comment</button>}
          </li>
        ))}
      </ul>
      {err && <p role="alert" style={{ fontSize: 13 }}>{err}</p>}
    </div>
  );
}
