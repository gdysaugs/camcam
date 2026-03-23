import { useNavigate } from 'react-router-dom'

type GuestIntroProps = {
  mode: 'image' | 'video'
  onSignIn: () => void
}

const ASSETS = {
  logo: '/media/yaju-hero-v2.png',
  original: '/media/sample-original.webp',
  edit: '/media/sample-edit.png',
  sub: '/media/sample-sub.jpg',
  pair: '/media/sample-pair.png',
  angle: '/media/sample-angle.png',
  video: '/media/sample-kiss.mp4',
  usageFashion: '/media/usage-1999.png',
  usageColor: '/media/usage-download-3.png',
  usageAngle: '/media/usage-ai32.png',
}

export function GuestIntro({ mode, onSignIn }: GuestIntroProps) {
  const navigate = useNavigate()
  const modeLabel = mode === 'video' ? '動画生成' : '画像編集'

  return (
    <div className="guest-shell">
      <section className="guest-hero">
        <div className="guest-hero__intro">
          <div className="guest-hero__badge">{modeLabel}</div>
          <p className="guest-eyebrow">YAJU AI</p>
          <h1>あなたの理想を現実化する。</h1>
        </div>
        <div className="guest-hero__stat">
          <div className="guest-stat">
            <span className="guest-stat__label">リリース2週間</span>
            <strong className="guest-stat__value">3000+</strong>
            <span className="guest-stat__note">ユーザー突破</span>
          </div>
        </div>
        <div className="guest-hero__media">
          <img className="guest-logo" src={ASSETS.logo} alt="YAJU AI" />
        </div>
        <div className="guest-hero__visual">
          <img className="guest-hero__image" src={ASSETS.pair} alt="生成例: 仲良く肩組み" />
        </div>
        <div className="guest-hero__body">
          <p className="guest-lede">
            世界最先端の生成速度で、画像から新たな画像・動画・アングル変更まで一気通貫。
            日本語プロンプト対応、アニメも実写も1分で生成可能です。
          </p>
          <div className="guest-cta">
            <button type="button" className="primary-button" onClick={onSignIn}>
              新規登録 / ログイン
            </button>
          </div>
          <div className="guest-badges">
            <span>新規登録は10秒で完了</span>
            <span>初回3枚チケット付与</span>
            <span>画像1枚 / 動画2枚</span>
            <span>毎日ログインで生成1回無料</span>
          </div>
        </div>
      </section>

      <section className="guest-section">
        <div className="guest-section__header">
          <h2>できること</h2>
          <p>最短ステップで、あなたのアイデアを形に。</p>
        </div>
        <div className="guest-feature-grid">
          <article className="guest-feature">
            <h3>画像から新たな画像</h3>
            <p>プロンプトだけで衣装や雰囲気、構図を瞬時に変更。</p>
          </article>
          <article className="guest-feature">
            <h3>画像から動画生成</h3>
            <p>静止画から7秒の動画を生成可能。SNS用の短尺素材も約1分で完成。</p>
          </article>
          <article className="guest-feature">
            <h3>アングル変更</h3>
            <p>方向・高さをあらゆる角度から選択でき、自在に視点を切替。</p>
          </article>
          <article className="guest-feature">
            <h3>日本語プロンプト対応</h3>
            <p>実写もアニメもOK。直感的な指示で高精度生成。</p>
          </article>
        </div>
      </section>

      <section className="guest-section">
        <div className="guest-section__header">
          <h2>作例</h2>
          <p>画像編集・合成・アングル変更・動画生成の実例。</p>
        </div>
        <div className="guest-card-grid">
          <article className="guest-card">
            <h3>画像編集（タンクトップ＆ジーンズ）</h3>
            <p className="guest-prompt">プロンプト: タンクトップとジーンズで腕組み</p>
            <div className="guest-compare">
              <figure>
                <img src={ASSETS.original} alt="入力画像" />
                <figcaption>入力</figcaption>
              </figure>
              <figure>
                <img src={ASSETS.edit} alt="編集後の画像" />
                <figcaption>生成結果</figcaption>
              </figure>
            </div>
          </article>
          <article className="guest-card">
            <h3>サブ画像合成（肩組み）</h3>
            <p className="guest-prompt">プロンプト: メイン画像の男性とサブ画像の女性が仲良く肩組んで</p>
            <div className="guest-trio">
              <figure>
                <img src={ASSETS.edit} alt="メイン画像" />
                <figcaption>メイン</figcaption>
              </figure>
              <figure>
                <img src={ASSETS.sub} alt="サブ画像" />
                <figcaption>サブ</figcaption>
              </figure>
              <figure className="guest-result">
                <img src={ASSETS.pair} alt="合成結果" />
                <figcaption>生成結果</figcaption>
              </figure>
            </div>
          </article>
          <article className="guest-card">
            <h3>アングル変更（45度）</h3>
            <p className="guest-prompt">角度指定: 下45度</p>
            <div className="guest-single">
              <img src={ASSETS.angle} alt="45度アングルの生成結果" />
            </div>
          </article>
          <article className="guest-card">
            <h3>画像から動画（7秒）</h3>
            <p className="guest-prompt">プロンプト: 男女でキスして</p>
            <div className="guest-single">
              <video controls playsInline preload="metadata" src={ASSETS.video} />
            </div>
          </article>
        </div>
      </section>

      <section className="guest-section guest-signup">
        <div className="guest-section__header">
          <h2>今すぐ10秒で登録</h2>
          <p>新規登録でチケット3枚プレゼントキャンペーン中。</p>
        </div>
        <div className="guest-cta guest-cta--center">
          <button type="button" className="primary-button" onClick={onSignIn}>
            新規登録 / ログイン
          </button>
        </div>
      </section>

      <section className="guest-section">
        <div className="guest-section__header">
          <h2>活用法</h2>
          <p>
            YAJU AIは、服・髪型の変更や色調・絵柄の調整、アングル変更まで一気にこなせるクリエイター向けサポートツール。
            企画やラフ制作のスピードを上げながら、世界観の検証やアイデアの比較にも使えます。
          </p>
        </div>
        <div className="guest-card-grid">
          <article className="guest-card">
            <h3>ファッション検証</h3>
            <p>衣装や髪型を変えて、新しいスタイルをすばやく比較。</p>
            <div className="guest-single">
              <img src={ASSETS.usageFashion} alt="衣装変更の生成例" />
            </div>
          </article>
          <article className="guest-card">
            <h3>色調・絵柄の変更</h3>
            <p>トーンや雰囲気を変えて、作品の方向性を検証。</p>
            <div className="guest-single">
              <img src={ASSETS.usageColor} alt="色調変更の生成例" />
            </div>
          </article>
          <article className="guest-card">
            <h3>漫画風加工</h3>
            <p>手軽に陰影の確認やトレス作業に使える漫画風仕上げ。</p>
            <div className="guest-single">
              <img src={ASSETS.usageAngle} alt="漫画風加工の生成例" />
            </div>
          </article>
        </div>
      </section>

      <section className="guest-section guest-tips">
        <div className="guest-section__header">
          <h2>Tips</h2>
          <p>うまく生成するためのコツと注意事項。</p>
        </div>
        <ul>
          <li>動画生成は単語だけより、主語・述語の文章のほうが伝わりやすいです。</li>
          <li>例: 「タンクトップ」より「男性がタンクトップを着ている」。</li>
          <li>アングル変更をオンにすると、プロンプトの効きが弱まることがあります。</li>
          <li>動画生成は素材画像とプロンプトをもとに次の動きを決めます。思い通りの動きにならない場合は、画像生成で理想の動きに近い素材画像を作ってから動画生成すると安定します。</li>
          <li>稀にプログラムエラーで完了しない場合があります。10分以上待っても完了しない場合はページ更新後に再生成してください。</li>
          <li>画像は1枚、動画は2枚チケットを消費します。</li>
          <li>混雑する時間帯は生成時間が長くなることがあります。</li>
        </ul>
      </section>

      <section className="guest-section guest-terms">
        <div className="guest-section__header">
          <h2>利用上の注意</h2>
          <p>安全に使うためのルールをご確認ください。</p>
        </div>
        <ul>
          <li>実在する人物の性的な画像・動画の生成は禁止です。</li>
          <li>違法・有害・差別的・暴力的コンテンツの生成は禁止です。</li>
          <li>未成年に見える人物の性的な表現は禁止です。</li>
          <li>児童と思われる人物画像は年齢判定システムによる自動判定でブロックされます。</li>
          <li>個人情報やなりすまし目的の生成は禁止です。</li>
          <li>著作権・肖像権など第三者の権利を侵害しないでください。</li>
          <li>第三者の権利や公序良俗に反する生成は行わないでください。</li>
          <li>生成物の利用に関する責任はユーザーに帰属します。</li>
        </ul>
      </section>
    </div>
  )
}
