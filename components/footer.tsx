import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card/50 border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-serif">筆記具の夢</h3>
            <p className="text-sm text-muted-foreground">
              伝統的な日本の文房具専門店。和紙テープ、万年筆、手作りノートなど、高品質な文房具を取り揃えております。
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif">リンク</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/" className="hover:text-primary transition-colors">
                ホーム
              </Link>
              <Link href="/products" className="hover:text-primary transition-colors">
                商品一覧
              </Link>
              <Link href="/about" className="hover:text-primary transition-colors">
                当店について
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                お問い合わせ
              </Link>
              <Link href="/login" className="hover:text-primary transition-colors">
                ログイン
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif">お問い合わせ</h3>
            <address className="text-sm text-muted-foreground not-italic">
              〒123-4567
              <br />
              東京都渋谷区文房具町1-2-3
              <br />
              電話: 03-1234-5678
              <br />
              メール: info@bunbogu-yume.jp
            </address>

            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 筆記具の夢. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
