import Center from "../components/Center.js"
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-auto">
      <main>
        <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
        </div>
        <Center/>
      </main>
    </div>
  )
}