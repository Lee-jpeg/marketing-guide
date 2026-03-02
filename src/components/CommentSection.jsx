import React, { useState, useEffect } from 'react';

function CommentSection({ chapterId }) {
    const [comments, setComments] = useState([]);
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [content, setContent] = useState('');
    const [captchaAnswer, setCaptchaAnswer] = useState('');

    // Random captcha state
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    useEffect(() => {
        // Load comments for current chapter from localStorage
        const savedComments = localStorage.getItem(`comments_${chapterId}`);
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        } else {
            setComments([]);
        }
        generateCaptcha();
    }, [chapterId]);

    const generateCaptcha = () => {
        setNum1(Math.floor(Math.random() * 10) + 1);
        setNum2(Math.floor(Math.random() * 10) + 1);
        setCaptchaAnswer('');
    };

    const calculateTimeAgo = (timestamp) => {
        const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + "년 전";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + "개월 전";
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + "일 전";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + "시간 전";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + "분 전";
        return "방금 전";
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate captcha
        if (parseInt(captchaAnswer) !== num1 + num2) {
            alert("자동방지 문자의 정답이 틀렸습니다. 다시 시도해주세요.");
            generateCaptcha();
            return;
        }

        if (!nickname.trim() || !password.trim() || !content.trim()) {
            alert("닉네임, 비밀번호, 내용을 모두 입력해주세요.");
            return;
        }

        const newComment = {
            id: Date.now().toString(),
            nickname: nickname.trim(),
            password: password.trim(), // In a real app, this should be hashed
            content: content.trim(),
            createdAt: new Date().toISOString()
        };

        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        localStorage.setItem(`comments_${chapterId}`, JSON.stringify(updatedComments));

        // Reset form
        setNickname('');
        setPassword('');
        setContent('');
        generateCaptcha();
    };

    return (
        <div style={{
            marginTop: '60px',
            borderTop: '1px solid var(--border-color)',
            paddingTop: '40px'
        }}>
            <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: 'var(--color-text-title)',
                marginBottom: '24px'
            }}>
                댓글 <span style={{ color: 'var(--color-primary)' }}>{comments.length}</span>
            </h3>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} style={{
                backgroundColor: 'var(--color-surface)',
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '40px'
            }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                    <input
                        type="text"
                        placeholder="닉네임"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        style={{
                            flex: 1,
                            padding: '12px 16px',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-color)',
                            fontSize: '14px',
                            fontFamily: 'inherit',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                        }}
                        required
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            flex: 1,
                            padding: '12px 16px',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-color)',
                            fontSize: '14px',
                            fontFamily: 'inherit',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                        }}
                        required
                    />
                </div>

                <textarea
                    placeholder="주제와 무관한 댓글이나 악플은 삭제될 수 있습니다."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{
                        width: '100%',
                        height: '100px',
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-color)',
                        fontSize: '15px',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                        outline: 'none',
                        marginBottom: '16px',
                        transition: 'border-color 0.2s',
                    }}
                    required
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                            fontSize: '14px',
                            color: 'var(--color-text-body)',
                            fontWeight: '500'
                        }}>
                            자동등록방지: {num1} + {num2} =
                        </span>
                        <input
                            type="number"
                            value={captchaAnswer}
                            onChange={(e) => setCaptchaAnswer(e.target.value)}
                            style={{
                                width: '60px',
                                padding: '8px 12px',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-color)',
                                fontSize: '14px',
                                fontFamily: 'inherit',
                                outline: 'none',
                            }}
                            required
                        />
                    </div>
                    <button type="submit" className="toss-btn" style={{ padding: '10px 24px' }}>
                        등록
                    </button>
                </div>
            </form>

            {/* Comment List */}
            <div>
                {comments.length === 0 ? (
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', textAlign: 'center', padding: '40px 0' }}>
                        첫 번째 댓글을 남겨보세요.
                    </p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} style={{
                            padding: '24px 0',
                            borderBottom: '1px solid var(--border-color)',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <span style={{ fontWeight: '600', fontSize: '15px', color: 'var(--color-text-title)' }}>
                                    {comment.nickname}
                                </span>
                                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                                    {calculateTimeAgo(comment.createdAt)}
                                </span>
                            </div>
                            <p style={{ color: 'var(--color-text-body)', fontSize: '15px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                                {comment.content}
                            </p>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
}

export default CommentSection;
